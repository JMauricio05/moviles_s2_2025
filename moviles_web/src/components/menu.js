const itemMenu = (text) => {
    const li = document.createElement('li');
    const button = document.createElement('button');

    const span = document.createElement('span');
    span.classList.add('material-symbols-outlined');
    span.textContent = 'home'
    button.appendChild(span);

    button.innerHTML += text;
    //button.innerHTML = button.innerHTML + text;
    li.appendChild(button);
    return li;
};

const menu = () => {
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'menuPrincipal');
    nav.classList.add('menu');

    const closeBtn = document.createElement('button');
    const iconClose = document.createElement('span');
    iconClose.classList.add('material-symbols-outlined');
    iconClose.textContent = 'close';
    closeBtn.appendChild(iconClose);
    closeBtn.addEventListener('click', () => {
        nav.classList.remove('open');
    });

    const list = document.createElement('ul');
    const options = ['Responsive', 'Ionic', 'Reactnative', 'Android'];
    for (let item of options) {
        list.appendChild(itemMenu(item));
    }
    // list.appendChild(itemMenu('Responsive'));
    // list.appendChild(itemMenu('Ionic'));
    // list.appendChild(itemMenu('Reactnative'));
    // list.appendChild(itemMenu('Android'));
    nav.appendChild(closeBtn);
    nav.appendChild(list);
    return nav;
};

export default menu;