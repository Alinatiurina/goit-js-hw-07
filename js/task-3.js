const userName = document.getElementById("name-input");
const newName= document.getElementById("name-output")
userName.addEventListener("input", (event) => {
    newName.textContent = event.currentTarget.value;
}
 );
