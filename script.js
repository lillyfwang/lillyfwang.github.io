$(document).ready(function() {

	//These effects are for the homepage (hovering over divs)

		$('.updown').hover(
		function()
		{
			$(this).animate({height: "+=15px"});
			$(this).css("border", "dotted 2px #FFFFFF");
		},
		function()
		{
			$(this).animate({height: "-=15px"});
			$(this).css("border", "none");
		});

	$('.leftright').hover(
		function()
		{
			$(this).animate({width: "+=15px"});
			$(this).css("border", "dotted 2px #FFFFFF");
		},
		function()
		{
			$(this).animate({width: "-=15px"});
			$(this).css("border", "none");
		});
	
	$('#name').hover(
		function()
		{
			$(this).css("color", "#423B28");
			$('img').css("opacity", "1");
			$('img').css("border", "solid 3px #423B28");
		},
		function()
		{
			$(this).css("color", "#2E2511");
			$('img').css("opacity", ".9");
			$('img').css("border", "double 3px #2E2511");
		});

	//Slide Events
	$('#github p').click(
		function(){
			$(this).slideUp('slow');
			$('#github').animate({height: "+=84%"}, 700);
			$('#github').css("opacity", "1");
			$('#github').css("z-index", "100");
			$('#github-inner').css("opacity", "1");
		});

	$('#github-inner').click(
		function(){
			$('#github p').slideDown('slow');
			$('#github').animate({height: "-=84%"}, 700);
			$('#github').css("opacity", ".3");
			$('#github').css("z-index", "3");
			$('#github-inner').css("opacity", "1");
		});

	$('#about p').click(
		function(){
			$('#about p').slideUp('slow');
			$('#about').animate({height: "+=78%"}, 700);
			$('#about').css("opacity", "1");
			$('#about').css("z-index", "100");
			$('#about-inner').css("opacity", "1");
		});

	$('#about-inner').click(
		function(){
			$('#about p').slideDown('slow');
			$('#about').animate({height: "-=78%"}, 700);
			$('#about').css("opacity", ".3");
			$('#about').css("z-index", "1");
			$('#about-inner').css("opacity", "0");
		});

	$('#resume p').click(
		function(){
			$('#resume').animate({width: "+=100%"}, 700);
			$('#resume').css("opacity", "1");
			$('#resume').css("z-index", "100");
			$('#resume-inner').css("opacity", "1");
		});

	$('#resume-inner').click(
		function(){
			$('#resume').animate({width: "-=100%"}, 700);
			$('#resume').css("opacity", ".3");
			$('#resume').css("z-index", "4");
			$('#resume-inner').css("opacity", "0");
		});

	$('#contact p').click(
		function(){
			$('#contact').animate({width: "+=100%"}, 700);
			$('#contact p').animate({width: "+=200%"}, 700);
			$('#contact').css("opacity", "1");
			$('#contact').css("z-index", "100");
			$('#contact-inner').css("opacity", "1");
		});

	$('#contact-inner').click(
		function(){
			$('#contact').animate({width: "-=100%"}, 800);
			$('#contact p').animate({width: "-=199%"}, 800);
			$('#contact').css("opacity", ".3");
			$('#contact').css("z-index", "2");
			$('#contact-inner').css("opacity", "0");
		});
});