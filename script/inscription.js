const firstName = document.getElementById("first").value;
const lastName = document.getElementById("last").value;
const email = document.getElementById("email").value;
const birthDate = document.getElementById("birthdate").value;
const eventAttended = document.getElementById("quantity").value;
const eventCity = document.querySelectorAll('[name="location"]').filter((location) => location.checked)
const cityName= eventCity.empty ? "" : eventCity.value;
const cgv = document.getElementById("checkbox1").value;
const newsletter = document.getElementById("checkbox2").value;

document.getElementById('form-inscription').addEventListener('submit', function(event) {

    if (!name||!email){
        alert("fields required");
        event.prenventDefault();
    } else{
        alert("its all ok");
    }
});