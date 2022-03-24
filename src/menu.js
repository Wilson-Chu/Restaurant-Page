import './styles/menu.css';

export default function loadMenu() {
    const menuPage = document.getElementById("main");
    menuPage.textContent = "";

    const background = document.createElement('div');
    background.id = 'backgroundMenu';
    background.innerHTML = 'Menu is Here!';
    menuPage.appendChild(background);
}