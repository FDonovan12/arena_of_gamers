const socket = io();

socket.on('pastEvent', (data) => {
    console.log(data);
    printPastEvent(data);
});

function printPastEvent(pastEvents) {
    console.log(pastEvents);
    const main = document.querySelector('#pastEvent');
    main.innerHTML = '';
    pastEvents.forEach((pastEvent) => {
        const eventDiv = document.createElement('div');
        eventDiv.innerHTML = `
    <div>${pastEvent.name}</div>
    <div>${pastEvent.city}</div>
    <div>${pastEvent.eventDate}</div>
    `;
        main.appendChild(eventDiv);
    });
}
