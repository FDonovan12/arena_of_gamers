const socket = io();

socket.on('pastEvent', (data) => {
    console.log(data);
    printPastEvent(data);
});

function printPastEvent(pastEvents) {
    console.log(pastEvent);
    const main = document.querySelector('#pastEvent');
    main.innerHTML = '';
    pastEvents.forEach((pastEvent) => {
        const mainDiv = document.createElement('div');
        mainDiv.innerHTML = `
    <div>${pastEvent.name}</div>
    <div>${pastEvent.city}</div>
    <div>${pastEvent.eventDate}</div>
    `;
        main.appendChild(mainDiv);
    });
}
