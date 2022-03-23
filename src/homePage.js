import hero from './assets/hero.svg';
import './styles/homePage.css';

export default function homePage() {
    console.log("I'm home!");

    const content = document.querySelector('#content');

    const background = document.createElement('div');
    background.id = 'backgroundHome';
    background.innerHTML = 'Home Page is Here!';
    content.appendChild(background);

    const heroImg = document.createElement('img');
    heroImg.id = 'hero';
    heroImg.src = hero;
    heroImg.alt = 'Pizza';
    content.appendChild(heroImg);
}