import './styles/menu.css';

export default function menu() {
    console.log('Look at the menu!');

    const content = document.querySelector('#content');

    const background = document.createElement('div');
    background.id = 'background-menu';
    background.innerHTML = 'Menu is Here!';
    content.appendChild(background);
}