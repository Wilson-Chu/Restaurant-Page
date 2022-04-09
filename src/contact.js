import './styles/contact.css';

export default function loadContact() {
    const contactPage = document.getElementById("main");
    contactPage.textContent = "";

    const background = document.createElement('div');
    background.id = 'background';
    contactPage.appendChild(background);

    const contactContainer = document.createElement('div');
    contactContainer.id = 'contact-container';
    background.appendChild(contactContainer);

    const contactTitle = document.createElement('div');
    contactTitle.id = 'contact-title';
    contactTitle.textContent = 'Contact Us';
    contactContainer.appendChild(contactTitle);
}