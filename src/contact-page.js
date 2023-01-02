import erasePage from "./erase-page";

const contactPage = () => {
    erasePage();
    
    const page = document.querySelector('#page');
    const header = document.createElement('h1');
    

    header.textContent = 'Contact Info';

    page.appendChild(header);

}

export default contactPage;