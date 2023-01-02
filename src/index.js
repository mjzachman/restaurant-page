
import loadPage from "./load-page";
import homePage from "./home-page";
import menuPage from "./menu-page";
import contactPage from "./contact-page";

loadPage();

const homeBtn = document.querySelector('#home');
 homeBtn.addEventListener('click', function () {
    homePage();
 });

const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', function () {
    menuPage();
});

const contactBtn = document.querySelector('#contact');
contactBtn.addEventListener('click', function () {
    contactPage();
});