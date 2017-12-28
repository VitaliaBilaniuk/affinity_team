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
$(function() {
    $('#ChangeToggle').click(function() {
        setTimeout(mobileMenu, 400);
        $('#navbar-hamburger').toggleClass('hidden');
        $('#navbar-close').toggleClass('hidden'); 
    });
});

/*Mobile menu*/
function mobileMenu() {
    if ($('#myNavbar').hasClass('in')){
        $('.navbar-header').addClass('opened-menu');
        $('.navbar-brand').hide();
        $('.navbar-toggle').css('margin-top' , '5px');
    }
    else {
        $('.navbar-header').removeClass('opened-menu'); 
        $('.navbar-brand').show();
        $('.navbar-toggle').css('margin-top' , '25px');
    }   
}