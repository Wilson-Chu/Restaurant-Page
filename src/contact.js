import './styles/contact.css';

export default function contact() {
    console.log('Are you talking to me?');

    const content = document.querySelector('#content');

    const background = document.createElement('div');
    background.id = 'background-contact';
    background.innerHTML = 'Contact Us Here!';
    content.appendChild(background);
}