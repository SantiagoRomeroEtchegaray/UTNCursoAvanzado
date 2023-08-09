let images = document.querySelectorAll(`.img_puzzle`);
let placeholders = document.querySelectorAll(`.puzzlePlaceholder`);
let btnReset = document.querySelector(`#btn_reset`);


function dragstart_handler(event) {
    // Save the dragged id
    event.dataTransfer.setData("Text", event.target.id);
}

function dragover_handler(event) {
    event.preventDefault();
}

function drop_handler(event) {
    let id = event.dataTransfer.getData("Text");   
    let image = document.getElementById(id);
    let targetClass = event.target.classList[0];

    event.dataTransfer.clearData("Text");
    
    // Check that the placeholder is empty
    if(targetClass == "img_puzzle") {
        return;
    }
    
    /* If drop ended in the div`s p. Prevent the styling on the p from affecting the img */
    if(targetClass == "puzzlePlaceholder_p") {
        event.target.classList.remove(targetClass);
    }
   
    // Display dragged image on placeholder
    event.target.innerHTML = `<img class="img_puzzle anim_game" src=${image.src} alt="Rompecabeza">`;
    // Hide the dragged image
    image.classList.add('hidden');
}

images.forEach(img => {
    img.addEventListener('dragstart', dragstart_handler);
});

placeholders.forEach(placeholder => {
    placeholder.addEventListener(`dragover`, dragover_handler);
    placeholder.addEventListener(`drop`, drop_handler);
});

btnReset.addEventListener('click', () => {
    window.location.reload();
});