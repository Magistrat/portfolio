const images = document.querySelectorAll('.slider .slider-line .slider_block');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;

const block_sl = document.querySelectorAll('.block_slider');
let height_b = [];


block_sl.forEach(item => {
    height_b.push(item.scrollHeight);    
}); 
let height_m = Math.max.apply(null, height_b);
height_m = height_m + ' px' 
console.log(height_m);

jQuery(function($){
    $('.block_slider_in').css({'height': '500 px'});
});





function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('#right_ar').addEventListener('click', function () {
    count++;
    var in_sl = '#min'+count
    
    jQuery(function($){
        $('.line_block_min').css({'opacity':'0'});
        $(`${in_sl}`).css({'opacity':'1'});
    });

    if (count >= images.length) {
        count = 0;
        jQuery(function($){
            $('.line_block_min').css({'opacity':'0'});
            $('#min0').css({'opacity':'1'});
        });
    }
    rollSlider();
});

document.querySelector('#left_ar').addEventListener('click', function () {
    count--;
    var in_sl = '#min'+count
    
    jQuery(function($){
        $('.line_block_min').css({'opacity':'0'});
        $(`${in_sl}`).css({'opacity':'1'});
    });
    

    if (count < 0) {
        count = images.length - 1;
        var in_sl = '#min'+ count
        
        jQuery(function($){
            $('.line_block_min').css({'opacity':'0'});
            $(`${in_sl}`).css({'opacity':'1'});
        });
        
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}



