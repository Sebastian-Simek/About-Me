
const showButton = document.getElementById('button');
const animal = document.getElementById('animalDiv');

const nameBtn = document.getElementById('nameButton');
const myName = document.getElementById('name');

showButton.addEventListener('click', () => {
    animal.classList.remove('hidden');
});

nameBtn.addEventListener('click', () => {
    if (myName.textContent === '') { 
        myName.textContent = 'Sebastian';
    } else {
        myName.textContent = '';
    }
}

);