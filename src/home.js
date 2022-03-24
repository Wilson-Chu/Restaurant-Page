import hero from './assets/hero.svg';
import './styles/homePage.css';

export default function loadHome() {
    const homePage = document.getElementById("main");
    homePage.textContent = "";

    const background = document.createElement('div');
    background.id = 'backgroundHome';
    background.innerHTML = 'Home Page is Here!';
    homePage.appendChild(background);

    const heroImg = document.createElement('img');
    heroImg.id = 'hero';
    heroImg.src = hero;
    heroImg.alt = 'Pizza';
    homePage.appendChild(heroImg);
}