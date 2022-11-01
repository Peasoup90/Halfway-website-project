//Add alert for fisrtname, hide page using css hide until field complete
//include dynamic welcome message

//header hamburger array about, gallery, contact us, testimonials 

// cosnt = menuTrigger = document.querySelectorAll("[data-menu-toggle]");

// Array.prototype.forEach.apply(menuTrigger, [
//     function(TRIGGER) {
//         TRIGGER.addEventListener("click", function(event) 
//         event.preventDefault())
//         toggleSidebar()
//     }
// ])

//



//div 3 text 
let i = 0;
let txt = "Bespoke, hand carved, one-of-a-kind sculptures. Based in, but not limited to, the South-West of England. Please contact me for commission pieces and quotes.";
let speed = 50; 

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("div3").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
};

//form 

const button = document.querySelector("#button");
const form = document.querySelector("#contactForm")

console.log(form);
console.log(button);

form.addEventListener("submit", collapse);

function collapse() {
    if (validateForm = true)
    return form.classList.toggle("hide");
    event.preventDefault()

}

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
