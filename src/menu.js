import './styles/menu.css';

export default function loadMenu() {
    console.log('Look at the menu!');

    const content = document.querySelector('#content');

    const background = document.createElement('div');
    background.id = 'backgroundMenu';
    background.innerHTML = 'Menu is Here!';
    content.appendChild(background);
}