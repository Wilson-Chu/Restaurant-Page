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

    const cardLabel = document.createElement('div');
    cardLabel.classList.add('menu-label');
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

    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';
    background.appendChild(menuContainer);

    const menuTitle = document.createElement('div');
    menuTitle.id = 'menu-title';
    menuTitle.textContent = 'Menu';
    menuContainer.appendChild(menuTitle);

    /* Container of all menu cards */
    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    menuTitle.appendChild(menuItems);

    menuItems.appendChild(
        createMenuCard(pizza1, 'Classic Margherita Pizza', 'Classic Margherita Pizza - $8')
    );
    menuItems.appendChild(
        createMenuCard(pizza2, 'Pepperoni Pizza', 'Pepperoni Pizza - $10')
    );
    menuItems.appendChild(
        createMenuCard(pizza3, 'Individual Pizza Slices', 'Pizza Slice - $3')
    );
    menuItems.appendChild(
        createMenuCard(pizza4, 'Cheese Pizza', 'Cheese Pizza - $9')
    );
}