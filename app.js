
const showButton = document.getElementById('button');
const animal = document.getElementById('animalDiv');
const nameBtn = document.getElementById('nameButton');
const myName = document.getElementById('name');

nameBtn.addEventListener('click', () => {
    if (myName.textContent === '____') { 
        myName.textContent = 'Sebastian';
    } else {
        myName.textContent = '____';
    }
});

showButton.addEventListener('click', () => {
    animal.classList.toggle('hidden');
});
