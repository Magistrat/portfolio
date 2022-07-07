jQuery(function($){
    "use strict";
    $('.nav_b').on('mouseenter', function(){
        $('.nav_b:hover i').css({"color":"#303030"});
        
        $('.nav_b').on('mouseleave', function(){
            $('.nav_b i').css({"color":"#d3d3d3"});
        });
    });
    
    $(window).keyup(function(e){
        var target = $('.checkbox-ios input:focus');
        if (e.keyCode == 9 && $(target).length){
            $(target).parent().addClass('focused');
        }
    });

    $('.checkbox-ios input').focusout(function(){
        $(this).parent().removeClass('focused');
    });
    
    var width_web = $('header').width();
    
    if(width_web < 851){
        $('.week_days').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            arrows: false,
        });
        
    }else{
        var aaa = 1;
    }
    
    
    
    
    
});