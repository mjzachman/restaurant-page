const erasePage = () => {
    const page = document.querySelector('#page');
    while(page.firstChild){
        page.removeChild(page.firstChild);
    }
}

export default erasePage;