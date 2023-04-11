// var crud = 'https://crudcrud.com/api/cd10f6036f8a42378485bd380f258be6' + '/appointmentData/';

window.onload = async () => {
    try{
        const customer = await axios.get('http://localhost:4000/admin/getAll');
        const appointdetail = customer.data;
        console.log(customer);
        for(const appointment of appointdetail) {
            console.log(appointment.id);
            setValueInUi(appointment, appointment.id);
            
        }
    } catch(err) {
        console.log(err);
    };
}

async function addToLocalStorage(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const phonenumber = event.target.phone.value;
   
    let obj = {
        name,
        email,
        phonenumber
    }
    console.log('Its main obj ',obj);
    const customer = await axios.post('http://localhost:4000/user/add-user/', obj);
    console.log(customer);
    try {
        console.log(customer);
        const appointment = customer.data;
        setValueInUi(obj, appointment.id);
    }catch (err) {
        console.log(err);
    }
    // localStorage.setItem(obj.mail, JSON.stringify(obj));

}
async function setValueInUi(obj, id) {
    var parentElement = document.getElementById('user');
    var btn = document.createElement('input');
    btn.className = 'btn delete';
    btn.type = 'button';
    btn.value = 'Delete';
    
    btn.onclick = async () => {
        console.log('delete Btn '+id);
        const res = await axios.delete('http://localhost:4000/admin/delete/', {params: {id}});
        try {
            console.log(res);
            parentElement.removeChild(childElement);
        }catch (err) {
            console.error(err);
        }
        
    };
    let email = document.getElementById('mail');
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    
    var edit = document.createElement('input');
    edit.className = 'btn edit';
    edit.type = 'button';
    edit.value = 'edit';
    edit.onclick = async () => {
        email.value = obj.email;
        name.value = obj.name;
        phone.value = obj.phonenumber;
        
        const res = await axios.delete('http://localhost:4000/admin/delete/', {params: {id}});
        try{
            console.log(res);
            parentElement.removeChild(childElement);
        }catch(err) {
            console.log(err);
        }
    }
    var childElement = document.createElement('li');
    childElement.textContent = 'Name: '+obj.name+' Email: '+obj.email+' PhoneNumber: '+obj.phonenumber;
    childElement.appendChild(btn);
    childElement.appendChild(edit);
    parentElement.appendChild(childElement);
    email.value = '';
    name.value = '';
    phone.value = '';
}
