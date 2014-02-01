$(document).ready(function() {

	$('div').hover(
		function()
		{
			$(this).css("z-index", "100");
			$(this).css("border", "dotted 2px #FFFFFF");
			$(this).fadeTo(1);
		},
		function() {
      		 $(this).css("z-index", "-100");
      		 $(this).css("border", "none");
      		 $(this).fadeTo(.3);
  		 });

	$('.updown').hover(
		function()
		{
			$(this).animate({height: "+=15px"})
		},
		function()
		{
			$(this).animate({height: "-=15px"})
		});


	$('.leftright').hover(
		function()
		{
			$(this).animate({width: "+=15px"})
		},
		function()
		{
			$(this).animate({width: "-=15px"})
		});


});