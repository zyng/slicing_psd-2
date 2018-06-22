/*jslint browser: true*/
/*global $, document*/


$(document).ready(function () {
    'use strict';

    var hamburger = document.querySelector('.menu-toggle'),
        menuContent = document.querySelector('.container-menu'),
        pageMenu = document.querySelector('.page-menu'),
        hamburgerIcon = document.getElementById('hamburger-icon'),
        slider = document.querySelector('.container-slider');


    hamburger.addEventListener('click', function () {

        pageMenu.classList.toggle('shadow-box');

        if (menuContent.style.display === "block") {
            menuContent.style.display = "none";
            hamburgerIcon.src = "img/hamburger-close.png";
            slider.style.display = "block";
            pageMenu.style.height = "auto";
        } else {
            menuContent.style.display = "block";
            hamburgerIcon.src = "img/hamburger-open.png";
            slider.style.display = "none";
            pageMenu.style.height = "100%";
        }

    });

});


$(document).ready(function () {
    'use strict';

    var closeButton = document.querySelector('.search-input-container'),
        input = document.getElementById('search-input');


    closeButton.addEventListener('click', function () {
        input.value = '';
    });

});
