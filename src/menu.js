import pizza1 from './assets/pizza1.jpg';
import pizza2 from './assets/pizza2.jpg';
import pizza3 from './assets/pizza3.jpg';
import pizza4 from './assets/pizza4.jpg';
import './styles/menu.css';

export default function loadMenu() {
    const menuPage = document.getElementById("main");
    menuPage.textContent = "";

    const background = document.createElement('div');
    background.id = 'background';
    menuPage.appendChild(background);

    const menuTitle = document.createElement('div');
    menuTitle.id = 'menu-title';
    menuTitle.textContent = 'Menu';
    background.appendChild(menuTitle);
}