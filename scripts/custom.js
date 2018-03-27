jQuery(function ($) { 
//Mobile carousel 
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
  //Desktop carousel
    $(document).ready(function() {
        $(document).ready(function () {
            var carousel = $("#carousel").waterwheelCarousel({
              flankingItems: 3,
              dotsContainer: '#carousel-custom-dots',
            });
    
            $('#prev').bind('click', function () {
              carousel.prev();
              return false
            });
    
            $('#next').bind('click', function () {
              carousel.next();
              return false;
            });
          });
    });
    //Popup
    $( "header button" ).click(function() {
      $( ".popup" ).toggle();
    });
    $( "#closePopup" ).click(function() {
      $( ".popup" ).css("display", "none");
    });
});
