const socket = io();

console.log('start futureEvent');

socket.on('futureEvent', (data) => {
    console.log('futureEvent event');
    printFutureEvent(data);
});

function printFutureEvent(futureEvents) {
    console.log('printFutureEvent');
    const main = document.querySelector('#futureEvent');
    main.innerHTML = '';
    futureEvents.forEach((futureEvent) => {
        const eventDiv = document.createElement('div');
        eventDiv.innerHTML = `
        <div>${futureEvent.name}</div>
        <div>${futureEvent.city}</div>
        <div>${futureEvent.eventDate}</div>
    `;
        main.appendChild(eventDiv);
    });
}

console.log('end futureEvent');
