/*SLIDER NAVIGATION*/
$(".carousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -5 ){
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});

/*Change mobile menu-icon to cross icon*/
jQuery(function ($) { 
    $('#ChangeToggle').click(function() {
        $('#navbar-hamburger').toggleClass('hidden');
        $('#navbar-close').toggleClass('hidden');
        $('.main-bg').toggleClass('menu-opened');
    });
/*Carousel enable */
    $(document).ready(function(){
        $('.center').slick({
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 5,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '120px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 991,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '80px',
                  slidesToShow: 3
                }
              }
            ]
          });
      });
});


