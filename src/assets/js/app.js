import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();
resizeHero();

function resizeHero() {
    // Calculate and set height of hero image
    let calcHeight = $(window).height();

    if ($(topMenu).css("display") === "none") {
        calcHeight -= $(mobileMenu).outerHeight();
    } else {
        calcHeight -= $(topMenu).outerHeight();
    }
    $(".hero").height(calcHeight);  
}; 

$(window).resize(resizeHero);
