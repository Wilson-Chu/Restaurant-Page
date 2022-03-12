import homePage from './homePage.js';
import menu from './menu.js';
import contact from './contact.js';

console.log('Hello world!');
const content = document.getElementById("content");

createNav();
homePage(); // console.log's "I'm home!" - module works!
menu();
contact();

function createNav() {
    const navBar = document.createElement('div');
    navBar.classList.add('header');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = 'Tony\'s Pizza';

    const nav = document.createElement('div');
    nav.classList.add('nav');

    const goHome = document.createElement('div');
    goHome.classList.add('home-button');
    goHome.id = 'homeButton';
    goHome.textContent = 'Home';

    const goMenu = document.createElement('div');
    goMenu.classList.add('menu-button');
    goMenu.id = 'menuButton';
    goMenu.textContent = 'Menu';

    const goContact = document.createElement('div');
    goContact.classList.add('contact-button');
    goContact.id = 'contactButton';
    goContact.textContent = 'Contact';

    content.appendChild(navBar);
    navBar.appendChild(logo);
    navBar.appendChild(nav);
    nav.appendChild(goHome);
    nav.appendChild(goMenu);
    nav.appendChild(goContact);
    console.log('Where to?');
}