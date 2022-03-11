export default function homePage() {
    console.log('I\'m home!');

    const content = document.querySelector('#content');

    const background = document.createElement('div');
    background.id = 'background';
    background.innerHTML = 'Home Page is Here!'
    content.appendChild(background);
}