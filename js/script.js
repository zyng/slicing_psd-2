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
            pageMenu.style.height = "auto";
            pageMenu.style.position = "absolute";

            if (slider) {
                slider.style.display = "block";
            }
        } else {
            menuContent.style.display = "block";
            hamburgerIcon.src = "img/hamburger-open.png";
            pageMenu.style.height = "100%";
            pageMenu.style.position = "fixed";

            if (slider) {
                slider.style.display = "none";
            }
        }
    });

});


$(document).ready(function () {
    'use strict';

    var closeButton = document.querySelector('.search-input-container'),
        input = document.getElementById('search-input');


    if (closeButton) {

        closeButton = closeButton.getElementsByTagName('img')[0];

        closeButton.addEventListener('click', function () {
            input.value = '';
        });
    }
});
