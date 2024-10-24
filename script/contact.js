const email = document.getElementById("formMail");
const subject = document.getElementById("formSubject");
const content = document.getElementById("formContent");
const socket = io();
const formIsValid = email && subject && content;

document.getElementById("contactForm").addEventListener("submit", event => {
    const email = document.getElementById("formMail");
    const subject = document.getElementById("formSubject");
    const message = document.getElementById("formMessage");

})