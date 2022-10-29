const button = document.querySelector("#button");
const form = document.querySelector("#contactForm")

console.log(form);
console.log(button);

form.addEventListener("submit", collapse);

function collapse() {
    if (validateForm = true)
    return form.classList.toggle("hide");
    event.preventDefault()

    // if (validateForm = false)
    // return validateForm()
}


//Add alert for fisrtname, hide page using css hide until field complete
//include dynamic welcome message

//header hamburger array about, gallery, contact us, testimonials 

const burgerItems = ["About", "Gallery", "Contact us", "testimonials"];
let burglen = burgerItems.length;
let text = "<ul>";

for (let i = 0; i < burglen.length; i++) {
    text += "<li>" + burgerItems[i] + "</li>";
}
text += "</ul>";

//

//footer form 'contact us' firstname, lastname, email, messagebox 100 limit, 
//submit button to collapse form once complete 

function validateForm() {
    let name = document.forms["contactForm"]["fName"];
    let surname = document.forms["contactForm"]["lName"];
    let email = document.forms["contactForm"]["email"];
    let message = document.forms["contactForm"]["Message"];

    if (name.value == "") {
        alert("please enter your first name")
        name.focus();
        return false;
    }

    if (surname.value == "") {
        alert("please enter your surname")
        surname.focus();
        return false;
    }

    if (email.value == "") {
        alert("please enter your email")
        email.focus();
        return false;
    }

    if (message.value == "") {
        alert("please enter your message to us")
        message.focus();
        return false;
    }

    return true;
}
