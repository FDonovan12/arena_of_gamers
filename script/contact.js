const socket = io();
const contactForm = document.getElementById('contactForm');
const formMail = document.getElementById('formMail');
const formSubject = document.getElementById('formSubject');
const formContent = document.getElementById('formContent');

contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const email = formMail.value;
    const subject = formSubject.value;
    const content = formContent.value;
    if (email && subject && content) {
        socket.emit("newContact", { email, subject, content });
        alert("Votre message a été envoyé, merci !");
    } else {
        alert("Veuillez renseigner tous les champs");
    }
})