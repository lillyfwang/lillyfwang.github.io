window._skel_config = {
  prefix: "assets/css/style",
  resetCSS: true,
  boxModel: "border",
  grid: { gutters: 30 },
  breakpoints: {
    wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
    narrow: { range: '960-1199', containers: 960 },
    narrower: { range: '570-959', containers: 570 },
    mobile: { range: '-569', containers: 'fluid', lockViewport: true, grid: { collapse: true, gutters: 20 } }
  }
};

window._skel_panels_config = {
  panels: {
    navPanel: {
      breakpoints: 'mobile',
      position: 'top',
      size: 400,
      html: '<div data-action="copyHTML" data-args="navBar"></div>'
    }
  },
  overlays: {
    navBar: {
      position: 'top-center',
      width: '100%',
      height:60,
    }
  }
};

$(document).ready(function(){
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

  $(function() {
    $( "#tabs" ).tabs();
  });
});