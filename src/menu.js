import pizza1 from './assets/pizza1.jpg';
import pizza2 from './assets/pizza2.jpg';
import pizza3 from './assets/pizza3.jpg';
import pizza4 from './assets/pizza4.jpg';
import './styles/menu.css';

function createMenuCard(picture, name, label) {
    const card = document.createElement('div');
    card.classList.add('menu-card');

    const imgPizza = document.createElement('img');
    imgPizza.classList.add('mini');
    imgPizza.src = picture;
    imgPizza.alt = name;
    card.appendChild(imgPizza);

    const cardLabel = document.createElement('p');
    cardLabel.textContent = label;
    card.appendChild(cardLabel);

    return card;
}

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

    /* Container of all menu cards */
    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    background.appendChild(menuItems);

    // Start of Menu Card 1
    const card1 = document.createElement('div');
    card1.classList.add('menu-card');
    menuItems.appendChild(card1);

    const imgPizza1 = document.createElement('img');
    imgPizza1.classList.add('mini');
    imgPizza1.src = pizza1;
    imgPizza1.alt = 'Classic Margherita Pizza';
    card1.appendChild(imgPizza1);

    const card1Label = document.createElement('p');
    card1Label.textContent = 'Classic Margherita Pizza - $8';
    card1.appendChild(card1Label);

    // Start of Menu Card 2
    menuItems.appendChild(
        createMenuCard(pizza2, 'Pepperoni Pizza', 'Pepperoni Pizza - $10')
    );

    /* Start of Menu Cards 3/4
    menuItems.appendChild(
        createMenuCard(pizza3, 'Individual Pizza Slices', 'Pizza Slice - $3')
    );

    menuItems.appendChild(
        createMenuCard(pizza4, 'Cheese Pizza', 'Cheese Pizza - $9')
    );
    */
}