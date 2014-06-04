window._skel_config = {
  prefix: "assets/css/style",
  resetCSS: true,
  boxModel: "border",
  grid: { gutters: 30 },
  breakpoints: {
    wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
    narrow: { range: '481-1199', containers: 960 },
    narrower: { range: '481-960', containers: 'fluid' },
    mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true, gutters: 20 } }
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
      breakpoints: 'wide,narrow,narrower',
      position: 'top-center',
      width: '100%',
      height:45,
    }
  }
};

$(document).ready(function(){
  //
});


function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

/*
scrollToAnchor('id3');

$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, function () {
        window.location.hash = target;
    });
}); */