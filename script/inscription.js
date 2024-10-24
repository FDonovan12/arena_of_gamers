const socket = io();

document.querySelector('#form-inscription').addEventListener('submit', (event) => {
    console.log('submit');
    event.preventDefault();
    const firstName = document.querySelector('#first').value;
    const lastName = document.querySelector('#last').value;
    const email = document.querySelector('#email').value;
    const birthDate = document.querySelector('#birthdate').value;
    const eventAttended = document.querySelector('#quantity').value;
    const eventCity = Array.from(document.querySelectorAll('[name="location"]')).filter(
        (location) => location.checked
    );
    const cityName = eventCity.empty ? '' : eventCity[0].value;
    const cgv = document.querySelector('#checkbox1').value;
    const newsletter = document.querySelector('#checkbox2').value;

    const formIsValid =
        firstName && lastName && email && birthDate && cityName && cgv && newsletter;

    const user = {
        firstName,
        lastName,
        email,
        birthDate,
        cityName,
        cgv,
        newsletter,
    };
    console.log('before');
    console.log(formIsValid);
    console.log(user);
    if (formIsValid) {
        console.log('valid');
        console.log(user);
        socket.emit('newUser', user);
    } else {
    }
});
