const itemMenu = (text) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = text;
    li.appendChild(button);
    return li;
};

const menu = () => {
    const nav = document.createElement('nav');
    nav.classList.add('menu');
    const list = document.createElement('ul');
    const options = ['Responsive', 'Ionic', 'Reactnative', 'Android'];
    for(let item of options){
       list.appendChild(itemMenu(item)); 
    }
    // list.appendChild(itemMenu('Responsive'));
    // list.appendChild(itemMenu('Ionic'));
    // list.appendChild(itemMenu('Reactnative'));
    // list.appendChild(itemMenu('Android'));
    nav.appendChild(list);
    return nav;
};

export default menu;