import './styles/contact.css';

export default function loadContact() {
    const contactPage = document.getElementById("main");
    contactPage.textContent = "";

    const background = document.createElement('div');
    background.id = 'background';
    contactPage.appendChild(background);
}