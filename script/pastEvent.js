const socket = io();

socket.on("pastEvent", (data) => {
    printPastEvent(data);
});

function printPastEvent(pastEvent) {

    const main = document.querySelector('#pastEvent');
    const mainDiv = document.createElement('div');
    mainDiv.innerHTML= `
    <div>${pastEvent.name}</div>
    <div>${pastEvent.city}</div>
    <div>${pastEvent.eventDate}</div>
    `;
    main.appendChild(mainDiv);
}