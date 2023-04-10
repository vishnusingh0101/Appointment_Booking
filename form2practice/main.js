var crud = 'https://crudcrud.com/api/cd10f6036f8a42378485bd380f258be6' + '/appointmentData/';

window.onload = async () => {
    try{
        const customer = await axios.get(crud);
        const appointdetail = customer.data;
        for(const appointment of appointdetail) {
            setValueInUi(appointment, appointment._id);
        }
    } catch(err) {
        console.log(err);
    };
}

async function addToLocalStorage(event) {
    event.preventDefault();
    const mail = event.target.email.value;
    const name = event.target.name.value;
    const phone = event.target.phone.value;

    let obj = {
        name,
        mail,
        phone
    }
    const customer = await axios.post(crud, obj);
    try {
        console.log(customer);
        const appointment = customer.data;
        setValueInUi(obj, appointment._id);
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
        const res = await axios.delete(crud + id);
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
        email.value = obj.mail;
        name.value = obj.name;
        phone.value = obj.phone;
        const res = await axios.delete(crud + id);
        try{
            console.log(res);
            parentElement.removeChild(childElement);
        }catch(err) {
            console.log(err);
        }
    }
    var childElement = document.createElement('li');
    childElement.textContent = 'Name: '+obj.name+' Email: '+obj.mail+' PhoneNumber: '+obj.phone;
    childElement.appendChild(btn);
    childElement.appendChild(edit);
    parentElement.appendChild(childElement);
    email.value = '';
    name.value = '';
    phone.value = '';
}
