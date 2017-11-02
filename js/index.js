/*enable toggle for nav*/
$(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});


/*make brand disappear on scroll*/
function checkScroll(){
    var startY = $('nav').height(); 

    if($(window).scrollTop() > startY){
        $('.navbar-brand').addClass("scrolled");
       
    }else{
        $('.navbar-brand').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });

}
