$(document).ready(function(){

  //animate scroll to different sections
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
            if(this.hash.length > 3) {
             $('html,body').animate({
                 scrollTop: target.offset().top-70
            }, 900);
            return false;
          }
        }
    }
  });

  $( "#tabs" ).tabs();
  $('#resume-info').css("height", $('#design').height());
});