/*
Template Name: Luthum
Author: <a href="http://www.os-templates.com/">OS Templates</a>
Author URI: http://www.os-templates.com/
Licence: Free to use under our free template licence terms
Licence URI: http://www.os-templates.com/template-terms
File: Back to Top JS
*/

jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});

$(".box1").hover(
    function () {
        $('.img-1').addClass("hide");
        $('.img-1-blue').removeClass("hide");
    }, 
    function () { 
        $('.img-1').removeClass("hide");
        $('.img-1-blue').addClass("hide");
    }
);
$(".box2").hover(
    function () {
        $('.img-2').addClass("hide");
        $('.img-2-blue').removeClass("hide");
    }, 
    function () { 
        $('.img-2').removeClass("hide");
        $('.img-2-blue').addClass("hide");
    }
);
$(".box3").hover(
    function () {
        $('.img-3').addClass("hide");
        $('.img-3-blue').removeClass("hide");
    }, 
    function () { 
        $('.img-3').removeClass("hide");
        $('.img-3-blue').addClass("hide");
    }
);
$(".box4").hover(
    function () {
        $('.img-4').addClass("hide");
        $('.img-4-blue').removeClass("hide");
    }, 
    function () { 
        $('.img-4').removeClass("hide");
        $('.img-4-blue').addClass("hide");
    }
);
