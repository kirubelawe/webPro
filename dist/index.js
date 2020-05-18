// Get the burger icon
/*
let burger_icon = document.querySelector(".burger");
let nav_bar = document.querySelector(".wide_nav");
let nav_lists = document.querySelector("#list_nav")
let nav_wrapper = document.querySelector(".nav");


console.log(burger_icon);

burger_icon.addEventListener('click', () => {
    nav_bar.style.display = "block";
    nav_wrapper.classList.toggleClass("nav_nav");

    // nav_lists.classList.toggleClass("list_nav");
});
*/
const navSlide = () => {
    const burger = document.querySelector('header .burger');
    const nav = document.querySelector('.wide_nav');
    const navLinks = document.querySelectorAll('.wide_nav li');

    //Toggle nav
    burger.addEventListener('click', () => {
        console.log(burger);
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
            }
        });
        burger.classList.toggle('toogle');
    });
}
/*
const navToggler = () => {
    const navLinks = document.querySelectorAll('.wide_nav li');
    navLinks.forEach((nav) => {
        nav.addEventListener('click', () => {
            let currentNav = document.querySelector('.wide_nav .active');
            currentNav.classList.toggle('active');
        })

    });
} */

navSlide();
/*
navToggler();
*/