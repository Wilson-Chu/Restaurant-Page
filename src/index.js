import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

console.log('Hello world!');
const content = document.getElementById("content");
//setActiveButton(document.querySelector('.button-nav'));



createNav();
loadHome(); // console.log's "I'm home!" - module works!

function createNav() {
    const navBar = document.createElement('div');
    navBar.classList.add('header');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = "Tony's Pizza";

    const nav = document.createElement('div');
    nav.classList.add('nav');

    const homeBtn = document.createElement('div');
    homeBtn.classList.add('button-nav');
    homeBtn.id = 'homeButton';
    homeBtn.textContent = 'Home';

    homeBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(homeBtn);
        loadHome();
    });

    const menuBtn = document.createElement('div');
    menuBtn.classList.add('button-nav');
    menuBtn.id = 'menuButton';
    menuBtn.textContent = 'Menu';

    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(menuBtn);
        loadMenu();
    });

    const contactBtn = document.createElement('div');
    contactBtn.classList.add('button-nav');
    contactBtn.id = 'contactButton';
    contactBtn.textContent = 'Contact';

    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(contactBtn);
        loadContact();
    });

    content.appendChild(navBar);
    navBar.appendChild(logo);
    navBar.appendChild(nav);
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    /*
    const main = document.createElement('div');
    main.classList.add('main');
    main.id = 'main';
    content.appendChild(main);
    */

    console.log('Where to?');
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.button-nav');

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active');
        }
    });

    button.classList.add('active');
}
