$(function(){

    
    
    //back to top
    
    var back2top = $(".back-to-top");
var html_body = $('html, body');
back2top.click(function(){
    html_body.animate({scrollTop:0},500);
});
    $(window).scroll(function(){
var scrolling = $(this).scrollTop();
if(scrolling > 200){
    back2top.fadeIn(500);
}
else{
    back2top.fadeOut(500);
}
    });    
    // nav
    
    $(window).scroll(function(){

var scrolling = $(this).scrollTop();
if(scrolling > 300){
    $(".navbar").addClass("bg");
}
else{
    
    $(".navbar").removeClass("bg");
}    
}); 
         // animation smooth scroll
//animation scroll js
    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
    
$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  fade:true,
  speed:2500,
});
    
$('.port-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  vertical:true,
  speed:2500,
  arrows:false,  
});    
          // wow js
    
         new WOW().init();
      
          //veno box
    $(document).ready(function(){
    $('.venobox').venobox(); 
});
         
    
               // video background
            jQuery(function(){
              jQuery(".player").YTPlayer();
            });
    
    // countdown js
    
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('feb 14, 2019 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)
    












});