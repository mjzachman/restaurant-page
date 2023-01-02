const loadPage = () => {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    header.textContent = 'Awesome Sauce';
    content.appendChild(header);
    
    const image = document.createElement('img');
    image.classList.add('ribs');
    image.setAttribute('src', '../src/ribs.jpeg');
    image.setAttribute('alt', 'some saucy ribs');
    content.appendChild(image);
    
    const lorem = document.createElement('p');
    lorem.classList.add('welcome');
    lorem.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    content.appendChild(lorem);

    const buttons = document.createElement('div');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    buttons.setAttribute('id', 'buttons');
    homeBtn.setAttribute('id', 'home');
    homeBtn.textContent = 'Home';
    menuBtn.setAttribute('id', 'menu');
    menuBtn.textContent = 'Menu';
    contactBtn.setAttribute('id', 'contact');
    contactBtn.textContent = 'Contact';

    buttons.appendChild(homeBtn);
    buttons.appendChild(menuBtn);
    buttons.appendChild(contactBtn);
    content.appendChild(buttons);

}

export default loadPage;