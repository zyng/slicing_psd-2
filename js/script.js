/*jslint browser: true*/
/*global $, document */


$(document).ready(function () {
    'use strict';

    var hamburger = document.querySelector('.menu-toggle'),
        menuContent = document.querySelector('.container-menu'),
        pageMenu = document.querySelector('.page-menu'),
        hamburgerIcon = document.getElementById('hamburger-icon'),
        slider = document.querySelector('.container-slider'),
        btnAllCategories = document.querySelector('.all-categories');




    hamburger.addEventListener('click', function () {
        pageMenu.classList.toggle('shadow-box');



        if (menuContent.style.display === "block") {
            pageMenu.style.width = "0";
            menuContent.style.display = "none";
            btnAllCategories.style.display = "none";
            hamburgerIcon.src = "img/hamburger-close.png";
            pageMenu.style.height = "auto";
            pageMenu.style.position = "absolute";

            if (slider) {
                slider.style.display = "block";
            }
        } else {

            if ($(document).width() > 671) {
                $('.page-menu').stop().animate({width: '374px'}, {duration: 800});
            } else {
                $('.page-menu').stop().animate({width: '50%'}, {duration: 800});
            }


            $('.container-menu').stop().fadeIn(2000);
            $('.all-categories').stop().fadeIn(2000);

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

    var closeButton = document.getElementById('close-btn'),
        input = document.getElementById('search-input');


    if (closeButton && input) {

        closeButton.addEventListener('click', function () {
            input.value = '';
            closeButton.style.display = "none";
        });


        input.addEventListener('keyup', function () {
            closeButton.style.display = "block";

            if (this.value.length === 0) {
                closeButton.style.display = "none";
            }
        });


    }
});


