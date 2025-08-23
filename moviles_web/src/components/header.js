const header = () => {
    const cabecera = document.createElement('header');
    cabecera.classList.add('header');
    const titulo = document.createElement('h1');
    titulo.textContent = 'Responsive';
    cabecera.appendChild(titulo);
    return cabecera;
};

export default header;