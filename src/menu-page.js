import erasePage from "./erase-page";

const menuPage = () => {
    erasePage();

    const page = document.querySelector('#page');
    const header = document.createElement('h1');
    

    header.textContent = 'Saucy Menu ;)';

    page.appendChild(header);

}

export default menuPage;