const openModal = () => {
    const modal = document.querySelector(".modal");
    const actualDisplay = modal.style.display;
    if(actualDisplay == "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block"
    }
}

const btn = document.querySelector("#btn")
btn.addEventListener("click", openModal)

window.onclick = function(event) {
    const modal = document.querySelector(".modal")
    if (event.target == modal) {
        openModal()
    }
}

