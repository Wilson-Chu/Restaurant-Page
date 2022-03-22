import homePage from './homePage.js';
import menu from './menu.js';
import contact from './contact.js';

console.log('Hello world!');
const content = document.getElementById("content");
//setActiveButton(document.querySelector('.button-nav'));



createNav();
homePage(); // console.log's "I'm home!" - module works!
//menu();
//contact();

function createNav() {
    const navBar = document.createElement('div');
    navBar.classList.add('header');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = 'Tony\'s Pizza';

    const nav = document.createElement('div');
    nav.classList.add('nav');

    const goHome = document.createElement('div');
    goHome.classList.add('button-nav');
    goHome.id = 'homeButton';
    goHome.textContent = 'Home';

    goHome.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(goHome);
        homePage();
    });

    const goMenu = document.createElement('div');
    goMenu.classList.add('button-nav');
    goMenu.id = 'menuButton';
    goMenu.textContent = 'Menu';

    goMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(goMenu);
        menu();
    });

    const goContact = document.createElement('div');
    goContact.classList.add('button-nav');
    goContact.id = 'contactButton';
    goContact.textContent = 'Contact';

    goContact.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(goContact);
        contact();
    });

    content.appendChild(navBar);
    navBar.appendChild(logo);
    navBar.appendChild(nav);
    nav.appendChild(goHome);
    nav.appendChild(goMenu);
    nav.appendChild(goContact);

    /*
    const main = document.createElement("main");
    main.classList.add("main");
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
