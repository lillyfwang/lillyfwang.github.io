$(document).ready(function() {

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

	//ABOUT PAGE TOGGLE
	var aboutOpen=false;
	$('#about').click(function(){
		aboutOpen=!aboutOpen;
		if (aboutOpen) {
			$(this).animate({bottom: "0%", opacity: 1, backgroundColor: "#FFFCF5", color: "#2E2511"}, 800);
			$(this).css("z-index", "10");
		}
		else
		{
			$(this).animate({bottom: "78%",opacity: .4, backgroundColor: "rgb(0, 126, 237)", color: "#FFFCF5"}, 800);
			$(this).css("z-index", "1");

		}
	});

	//CONTACT PAGE TOGGLE
	var contactOpen=false;
	$('#contact').click(function(){
		contactOpen=!contactOpen;
		if (contactOpen) {
			$(this).animate({right: "0%", opacity: 1, backgroundColor: "#FFFCF5", color: "#2E2511"}, 800);
			$(this).css("z-index", "10");
		}
		else
		{
			$(this).animate({right: "72%",opacity: .4, backgroundColor: "#C68CFF", color: "#FFFCF5"}, 800);
			$(this).css("z-index", "2");
		}
	});

	//GITHUB PAGE TOGGLE
	var ghOpen=false;
	$('#github').click(function(){
		ghOpen=!ghOpen;
		if (ghOpen) {
			$(this).animate({top: "0%", opacity: 1, backgroundColor: "#FFFCF5", color: "#2E2511"}, 800);
			$(this).css("z-index", "10");
		}
		else
		{
			$(this).animate({top: "84%",opacity: .4, backgroundColor: "rgb(0, 198, 237)", color: "#FFFCF5"}, 800);
			$(this).css("z-index", "3");
		}
	});

	//RESUME PAGE TOGGLE
	var resumeOpen=false;
	$('#resume').click(function(){
		resumeOpen=!resumeOpen;
		if (resumeOpen) {
			$(this).animate({left: "0%", opacity: 1, backgroundColor: "#FFFCF5", color: "#2E2511"}, 800);
			$(this).css("z-index", "10");
		}
		else
		{
			$(this).animate({left: "89%",opacity: .4, backgroundColor: "#00E384", color: "#FFFCF5"}, 800);
			$(this).css("z-index", "4");
		}
	});

});