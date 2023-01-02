import erasePage from "./erase-page";

const homePage = () => {
    erasePage();
    
    const pageDiv = document.querySelector('#page');
    const header = document.createElement('h1');
    const image = document.createElement('img');
    const lorem = document.createElement('p');

    header.textContent = 'Awesome Sauce';
    
    image.classList.add('ribs');
    image.setAttribute('src', '../src/ribs.jpeg');
    image.setAttribute('alt', 'some saucy ribs');
    
    lorem.classList.add('welcome');
    lorem.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    pageDiv.appendChild(header);
    pageDiv.appendChild(image);
    pageDiv.appendChild(lorem);
}

export default homePage;