import './sass/app.scss';

import button from './components/buttons.js';

const page = document.getElementById('page');

const titulo = document.createElement('h1');
titulo.textContent = 'Hola mundo!!!';

const boton = document.createElement('button');
boton.textContent = 'Saludar';
boton.addEventListener('click', () => {
    alert('Hola!!!');
});

page.appendChild(titulo);
page.appendChild(boton);
page.appendChild(button('Saludar a Pepe!!!', () => {
    alert('Hola Pepe!!!');
}));

