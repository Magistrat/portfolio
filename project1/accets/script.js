jQuery(function($){
    "use strict";
    
    var width_web = $('header').width();
    if(width_web <= 960){
        $('.au_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
        });
    }else{
        $('.au_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true
        });
    };
    
    $('.dis_plan_bt').on("mouseenter", function(){
        var al = $(this).attr('id');
        var al_price_blok = '#' + al + '.price_blok'
        var al_type_plan = '#' + al + '.type_plan'
        var al_bill_type = '#' + al + '.bill_type'
        
        $(al_price_blok).css({"background-color":"#008ed6", "color":"#fff"});
        $(al_type_plan).css({"color":"#008ed6"});
        $(al_bill_type).css({"color":"#fff"});
        
        $('.dis_plan_bt').on("mouseleave", function(){
            $('.price_blok').css({"background-color":"#fff", "color":"#000"});
            $('.type_plan').css({"color":"#000"});
            $('.bill_type').css({"color":"#999999"});
        });
    });
   
    
    
    
    if(width_web >= 960){
        $('.buttom2').on("click", function(){
            $('.block_form_after_nav').css({"display":"block"});
        });
    }else{
        $('.buttom2').on("click", function(){

            $("html, body").animate({
                scrollTop: $('#form_to_cont').offset().top
            }, {
                duration: 900,   // по умолчанию «400»
                easing: "linear" // по умолчанию «swing»
            });
        });  
    };
    
    

    
    
    
    
    
    $('.submit_but').on("click", function(){
        alert('Форма отправлена');
    });
    
    $('.sub_after_nav').on("click", function(){
        alert('Форма отправлена');
    });
    
    var asss = 1;
    
    
    
    do{
        if(width_web < 450){
            $('.menu_4elem').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: false,
                arrows: false,
            });  
        }else if(width_web <= 550){
            $('.menu_4elem').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: false,
                arrows: false,
            });
        }else if(width_web >= 550){
            $('.menu_4elem').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: false,
                arrows: false,
            });
        }
        
            
        
    
    }while(asss == 3);
    
    
    
    

    
    do{
        if(width_web < 480){
            $('.four_plans').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: false,
                arrows: false,
            });  
        }else if(width_web <= 550){
            $('.four_plans').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: false,
                arrows: false,
            });
        }else if(width_web <= 700){
            $('.four_plans').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: false,
                arrows: false,
            });
        }
        
            
        
    
    }while(asss == 3);
    
    
    
    
    
    
    
    
});