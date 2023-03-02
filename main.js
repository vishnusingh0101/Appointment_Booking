     // const btn = document.querySelector('.btn');
        // btn.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     document.querySelector('#my-form')
        //     .style.background = '#ccc';
        // });

        // btn.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     document.querySelector('body')
        //     .style.background = '#000';
        // });

        
        const myForm = document.querySelector('#my-form');
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        
        const userList = document.querySelector('#user');
        var newDiv = document.createElement('div');
        newDiv.className = 'msg';
        newDiv.id = 'msgDiv';


        myForm.addEventListener('submit', onSubmit);
        function onSubmit(e) {
            e.preventDefault();
            if(nameInput.value === '' || emailInput.value === '') {
                var container = document.querySelector('form');
                var content = document.querySelector("form .details");
                newDiv.classList.add('error');
                newDiv.innerHTML = 'Please enter all fields';
                console.log(newDiv);
                container.insertBefore(newDiv, content);

                setTimeout(() => newDiv.remove(),3000);
            }else {
                const li = document.createElement('li');
                li.appendChild(document.createTextNode(`Thank You!!! ${nameInput.value} for booking Your Appointment...`));
                let myObj = {
                    name : nameInput.value,
                    email : emailInput.value
                };
                let myObj_stringify = JSON.stringify(myObj);
                localStorage.setItem(nameInput.value, myObj_stringify);
                userList.appendChild(li);
                nameInput.value = '';
                emailInput.value = '';
                setTimeout(() => li.remove(),4000);
            }
        }
        


