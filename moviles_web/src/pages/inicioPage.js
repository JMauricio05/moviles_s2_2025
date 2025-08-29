const inicioPage = ()=>{
    const contentPage = document.createElement('section');

    const titulo = document.createElement('h2');
    titulo.textContent = 'Aplicaciones web responsive';

    contentPage.appendChild(titulo);
    return contentPage;
}

export default inicioPage;