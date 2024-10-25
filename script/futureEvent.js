const socket = io();

console.log('start futureEvent');

socket.on('futureEvent', (data) => {
    console.log('futureEvent event');
    printFutureEvent(data);
});

function printFutureEvent(futureEvent) {
    console.log('printFutureEvent');
    const main = document.querySelector('#futureEvent');
    const mainDiv = document.createElement('div');
    mainDiv.innerHTML = `
        <div>${futureEvent.name}</div>
        <div>${futureEvent.city}</div>
        <div>${futureEvent.eventDate}</div>
    `;
    main.appendChild(mainDiv);
}

console.log('end futureEvent');
