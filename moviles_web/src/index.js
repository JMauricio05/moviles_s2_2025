import './sass/app.scss';

//import button from './components/buttons.js';
import menu from './components/menu.js';
import header from './components/header.js';
import footer from './components/footer.js';

const page = document.getElementById('page');
//page.classList.add('principal');
page.appendChild(header());
page.appendChild(menu());
page.appendChild(footer());

