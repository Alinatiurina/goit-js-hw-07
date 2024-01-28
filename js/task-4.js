const form = document.querySelector(".login-form");
form.addEventListener("submit", submitForm)

function submitForm(event) {
    event.preventDefault();
    const data = {
        email: event.target.email.value.trim(),
        password: event.target.password.value.trim(),
    }
    if (data.email===""|| data.password==="") {
        alert ('All form fields must be filled in')
    }
    else {console.log(data)}
    
    form.reset();
}
