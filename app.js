//Add alert for fisrtname, hide page using css hide until field complete
//include dynamic welcome message

//header hamburger array about, gallery, contact us, testimonials 


//

//footer form 'contact us' firstname, lastname, email, messagebox 100 limit, 
//submit button to collapse form once complete 

function validateForm() {
    let name = document.forms["contactForm"]["fName"];
    let surname = document.forms["contactForm"]["lName"];
    let email = document.forms["contactForm"]["email"];
    let message = document.forms["contactForm"]["message"];

    if (name.value == "") {
        window.alert("please enter your first name")
        name.focus();
        return false;
    }

    if (surname.value == "") {
        window.alert("please enter your surname")
        surname.focus();
        return false;
    }

    if (email.value == "") {
        window.alert("please enter your email")
        email.focus();
        return false;
    }

    if (message.value == "") {
        window.alert("please enter your message to us")
        message.focus();
        return false;
    }

    return true;
}

const button = document.querySelector('#button');

button.addEventListener('click', () => {
    console.log('submitbuttonclicked');
});

button.addEventListener("click", () => {
    button.classList.add('hide');
})