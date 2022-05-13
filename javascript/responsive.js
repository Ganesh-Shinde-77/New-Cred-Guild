var burger = document.querySelector('.burger');

var ulLists = document.querySelector('.ul-lists');

var navbar = document.querySelector('.navbar');

burger.addEventListener("click", ()=>{

    ulLists.classList.toggle("nav-opac");
    navbar.classList.toggle("h-nav");

});