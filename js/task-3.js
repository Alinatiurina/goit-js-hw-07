const userNameInput = document.getElementById("name-input");
const nameOutput= document.getElementById("name-output")
userNameInput.addEventListener("input", (event) => {
    
    if (event.target.value.trim() !== "") {
    nameOutput.textContent = event.target.value.trim();
    } else 
        nameOutput.textContent = "Anonymous"; 
}
 );
