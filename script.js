$(document).ready(function() {

	//ENABLING TIPSY PLUGIN
	$(function() {
   		$('.east').tipsy({gravity: 'e'});
   		$('#error').tipsy({gravity: 'n'});
 	});

	//MAIN PAGE ANIMATIONS
	$('#about').hover(
		function()
		{$(this).animate({bottom:"-=2%"})},
		function()
		{$(this).animate({bottom: "+=2%"})});

	$('#contact').hover(
		function()
		{$(this).animate({right:"-=2%"})},
		function()
		{$(this).animate({right: "+=2%"})});

	$('#github').hover(
		function()
		{$(this).animate({top:"-=2%"})},
		function()
		{$(this).animate({top: "+=2%"})});

	$('#resume').hover(
		function()
		{$(this).animate({left:"-=2%"})},
		function()
		{$(this).animate({left: "+=2%"})});

	//ABOUT PAGE TOGGLES
	var aboutOpen=false;
	$('#about').click(function(){
		aboutOpen=!aboutOpen;
		if (aboutOpen) {
			$(this).animate({bottom: "0%", opacity: 1, backgroundColor: "#FFFCF5", color: "#2E2511"}, 800);
			$(this).css("z-index", "10");
			$('#about-inside').css("border", "solid 5px black");
			$('#about-inside').css("opacity","1");
		}
		else
		{
			$(this).animate({bottom: "78%",opacity: .4, backgroundColor: "rgb(0, 126, 237)", color: "#FFFCF5"}, 800);
			$(this).css("z-index", "1");
			$('#about-inside').css("border", "none");
			$('#about-inside').css("opacity",".4");
		}
	});

	//CONTACT PAGE TOGGLES
	var contactOpen=false;
	$('#contact').click(function(){
		contactOpen=!contactOpen;
		if (contactOpen) {
			$(this).animate({right: "0%", opacity: 1, backgroundColor: "#FFFCF5", color: "#2E2511"}, 800);
			$(this).css("z-index", "10");
			$('#contact-inside').css("border", "solid 5px black");
			$('#contact-inside').css("opacity","1");
		}
		else
		{
			$(this).animate({right: "72%",opacity: .4, backgroundColor: "#C68CFF", color: "#FFFCF5"}, 800);
			$(this).css("z-index", "2");
			$('#contact-inside').css("border", "none");
			$('#contact-inside').css("opacity",".4");
		}
	});

	//GITHUB PAGE TOGGLES
	var ghOpen=false;
	$('#github').click(function(){
		ghOpen=!ghOpen;
		if (ghOpen) {
			$(this).animate({top: "0%", opacity: 1, backgroundColor: "#FFFCF5", color: "#2E2511"}, 800);
			$(this).css("z-index", "10");
			$('#github-inside').css("border", "solid 5px black");
			$('#github-inside').css("opacity","1");
		}
		else
		{
			$(this).animate({top: "84%",opacity: .4, backgroundColor: "rgb(0, 198, 237)", color: "#FFFCF5"}, 800);
			$(this).css("z-index", "3");
			$('#github-inside').css("border", "none");
			$('#github-inside').css("opacity",".4");
		}
	});

	//RESUME PAGE TOGGLES
	var resumeOpen=false;
	$('#resume').click(function(){
		resumeOpen=!resumeOpen;
		if (resumeOpen) {
			$(this).animate({left: "0%", opacity: 1, backgroundColor: "#FFFCF5", color: "#2E2511"}, 800);
			$(this).css("z-index", "10");
			$('#resume-inside').css("border", "solid 5px black");
			$('#resume-inside').css("opacity","1");
		}
		else
		{
			$(this).animate({left: "89%",opacity: .4, backgroundColor: "#00E384", color: "#FFFCF5"}, 800);
			$(this).css("z-index", "4");
			$('#resume-inside').css("border", "none");
			$('#resume-inside').css("opacity",".4");
		}
	});

});