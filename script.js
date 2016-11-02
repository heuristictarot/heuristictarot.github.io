/**
 * Hide navbar brand by default
 */
$(function() {
  $("#header-logo").hide();
});
/**
 * Show navbar brand on scroll
 */
$(function() {

  $(window).scroll(function() {
    var x = $(window).scrollTop();

    if (x >= 400) {
      $("#header-logo").show();
    } else {
      $("#header-logo").hide();
    }

  });

});
/**
 * Make navbar opaque on scroll
 */


function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });

}
  
