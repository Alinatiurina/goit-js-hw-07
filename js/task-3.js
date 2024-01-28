const userName = document.getElementById("name-input");
const newName= document.getElementById("name-output")
userName.addEventListener("input", (event) => {
    
    if (event.target.value.trim() !== "") {
    newName.textContent = event.target.value.trim();
    } else {
        newName.textContent = "Anonymous"
    }; 
}
 );
