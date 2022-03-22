import './styles/contact.css';

export default function contact() {
    console.log('Are you talking to me?');

    /*
    const main = document.getElementById("main");
    main.textContent = ""; */

    const content = document.querySelector('#content');

    const background = document.createElement('div');
    background.id = 'backgroundContact';
    background.innerHTML = 'Contact Us Here!';
    content.appendChild(background);
}