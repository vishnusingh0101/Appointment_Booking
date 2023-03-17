window.onload = () => {
    axios.get('https://crudcrud.com/api/9788f5926f56415d94b62840fff8c5ee/appointmentData')
    .then( (customer) => {
        const appointdetail = customer.data;
        for(const appointment of appointdetail) {
            setValueInUi(appointment, appointment._id);
        }
    })
    .catch( (err) => {
        console.error(err);
    });
}

function addToLocalStorage(event) {
    event.preventDefault();
    const mail = event.target.email.value;
    const name = event.target.name.value;
    const phone = event.target.phone.value;

    let obj = {
        name,
        mail,
        phone
    }
    axios.post(`https://crudcrud.com/api/9788f5926f56415d94b62840fff8c5ee/appointmentData`,obj)
    .then( (customer) => {
        console.log(customer);
        const appointment = customer.data;
        setValueInUi(obj, appointment._id);
    })
    .catch( (err) => {
        console.error(err);
    });
    // localStorage.setItem(obj.mail, JSON.stringify(obj));

}
function setValueInUi(obj, id) {
    var parentElement = document.getElementById('user');
    var btn = document.createElement('input');
    btn.className = 'btn delete';
    btn.type = 'button';
    btn.value = 'Delete';
    var edit = document.createElement('input');
    edit.className = 'btn edit';
    edit.type = 'button';
    edit.value = 'edit';
    btn.onclick = () => {
        axios
        .delete(`https://crudcrud.com/api/9788f5926f56415d94b62840fff8c5ee/appointmentData/`+ id)
        .then( (res) => {
            console.log(res);
            parentElement.removeChild(childElement);
        })
        .catch( (err) => {
            console.error(err);
        });
        
    };

    
    let email = document.getElementById('mail');
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    
    edit.onclick = () => {
        email.value = obj.mail;
        name.value = obj.name;
        phone.value = obj.phone;
        axios
        .put(`https://crudcrud.com/api/9788f5926f56415d94b62840fff8c5ee/appointmentData/`+ id)
        .then( (res) => {
            console.log(res);
            parentElement.removeChild(childElement);
        })
        .catch( (err) => {
            console.error(err);
        });
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
