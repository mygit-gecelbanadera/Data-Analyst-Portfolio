const educbutton = document.getElementById('Education');
const modal_container = document.getElementById('modal-container');
const closebutton = document.getElementById('close');

educbutton.addEventListener('click', () => {
    modal_container.classList.add('show');
});
closebutton.addEventListener('click', () => {
    modal_container.classList.remove('show');
});