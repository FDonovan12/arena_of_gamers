const socket = io();

document.querySelector('#form-inscription').addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = document.querySelector('#first').value;
    const name = document.querySelector('#last').value;
    const email = document.querySelector('#email').value;
    const birthAt = document.querySelector('#birthdate').value;
    const nbTournament = document.querySelector('#quantity').value;
    const eventCity = Array.from(document.querySelectorAll('[name="location"]')).filter(
        (location) => location.checked
    );
    const cityTournament = eventCity.empty ? '' : eventCity[0].value;
    const cgv = document.querySelector('#checkbox1').checked;
    const newsletter = document.querySelector('#checkbox2').checked;

    const formIsValid =
        firstName && name && email && birthAt && nbTournament && cityTournament && cgv;

    const user = {
        firstName,
        name,
        email,
        birthAt,
        nbTournament,
        cityTournament,
        newsletter,
    };
    if (formIsValid) {
        console.log('valid');
        console.log(user);
        socket.emit('newUser', user);
        window.location.reload();
    } else {
        console.log("Can't submit");
    }
});
