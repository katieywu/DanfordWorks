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

    // if mobile is active
    if ($(mobileMenu).css("display") !== "none") {
        calcHeight -= $(mobileMenu).outerHeight();
        $(logo).hide();
        console.log($(rightMenu).children());
        if ($(rightMenu).hasClass("align-right")) {
            console.log("HAS CLASS");
            $(rightMenu).removeClass("align-right");
        }
    } else {
        calcHeight -= $(topMenu).outerHeight();
        $(logo).show();
        if (!$(rightMenu).hasClass("align-right")) {
            $(rightMenu).addClass("align-right");
        }
    }
    $(".hero").height(calcHeight);  
}; 

$(window).resize(resizeHero);
