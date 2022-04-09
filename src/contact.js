import map from './assets/map.png';
import './styles/contact.css';

export default function loadContact() {
    const contactPage = document.getElementById("main");
    contactPage.textContent = "";

    const background = document.createElement('div');
    background.id = 'background';
    contactPage.appendChild(background);

    const contactTitle = document.createElement('div');
    contactTitle.id = 'contact-title';
    contactTitle.textContent = 'Contact Us';
    background.appendChild(contactTitle);

    const contactContainer = document.createElement('div');
    contactContainer.id = 'contact-container';
    background.appendChild(contactContainer);

    const phoneNum = document.createElement('div');
    phoneNum.classList.add('phone-num');
    phoneNum.textContent = '123-456-7890';
    contactContainer.appendChild(phoneNum);

    const address = document.createElement('div');
    address.classList.add('address');
    address.textContent = '123 Main St, Toronto, ON, Canada  A1B2C3';
    contactContainer.appendChild(address);

    const imgLocation = document.createElement('img');
    imgLocation.classList.add('location');
    imgLocation.src = map;
    imgLocation.alt = 'Toronto';
    contactContainer.appendChild(imgLocation);
}