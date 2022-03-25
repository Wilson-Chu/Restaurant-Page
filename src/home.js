import hero from './assets/hero.svg';
import './styles/home.css';

export default function loadHome() {
    const homePage = document.getElementById("main");
    homePage.textContent = "";

    const background = document.createElement('div');
    background.id = 'background';
    homePage.appendChild(background);

    const heroImg = document.createElement('img');
    heroImg.id = 'hero';
    heroImg.src = hero;
    heroImg.alt = 'Pizza';
    background.appendChild(heroImg);

    const textBox = document.createElement('div');
    textBox.id = 'textBox';
    background.appendChild(textBox);
    const h1 = document.createElement('h1');
    h1.textContent = "Welcome to Will's Pizza!";
    textBox.appendChild(h1);

    const h2 = document.createElement('h2');
    h2.textContent = "Serving Toronto since 1867!";
    textBox.appendChild(h2);
}