const socket = io();
const eventBox = document.getElementsByClassName('active');

socket.on("pastEvent", (data) => {
    data.forEach(element => {
        afficherPastEvents(data);
    });
    
});

function afficherPastEvents(data) {
    console.log(data);
    
    const name = data.name;
    const city = data.city;
    const eventDate = data.eventDate;

    const pastEventDiv = document.createElement('div')
    
    
    messageDiv.innerHTML = `<span>${name}, ${city}, ${eventDate}`;
    eventBox.appendChild(pastEventDiv)
}