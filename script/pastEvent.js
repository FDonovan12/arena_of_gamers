const socket = io();
const eventBox = document.getElementsByClassName('active');

socket.on("pastEvent", (data) => {
        afficherPastEvents(data);
});

function afficherPastEvents(pastEvent) {

    const main = document.querySelector('#pastEvent');
    const mainDiv = document.createElement('div');

    mainDiv = document.createElement('div')
    mainDiv.innerHTML= `
    <div>${pastEvent.name}</div>
    <div>${pastEvent.city}</div>
    <div>${pastEvent.eventDate}</div>
    `;
    document.createElement('div')
}