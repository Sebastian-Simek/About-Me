
const showButton = document.getElementById('button');
const Animal = document.getElementById('animalDiv');

showButton.addEventListener('click', () => {
    Animal.classList.remove('hidden');
});