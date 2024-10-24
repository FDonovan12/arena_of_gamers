const firstName = document.getElementById("first").value;
const lastName = document.getElementById("last").value;
const email = document.getElementById("email").value;
const birthDate = document.getElementById("birthdate").value;
const eventAttended = document.getElementById("quantity").value;
const eventCity = document.querySelectorAll('[name="location"]').filter((location) => location.checked)
const cityName= eventCity.empty ? "" : eventCity[0].value;
const cgv = document.getElementById("checkbox1").value;
const newsletter = document.getElementById("checkbox2").value;

const socket = io();

const formIsValid = firstName&&lastName&&email&&birthDate&&cityName&&cgv&&newsletter;

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

// socket.on('submit', (data) => {
//     createUser(data.lastName, data.firstName, data.birthDate, data.email, data.cgv, data.newsletter, data.cityName);
// });