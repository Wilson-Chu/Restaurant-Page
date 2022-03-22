import './styles/menu.css';

export default function menu() {
    console.log('Look at the menu!');

    /*
    const main = document.getElementById("main");
    main.textContent = ""; */

    const content = document.querySelector('#content');

    const background = document.createElement('div');
    background.id = 'backgroundMenu';
    background.innerHTML = 'Menu is Here!';
    content.appendChild(background);
}