$(document).ready(function() {

	//ABOUT PAGE TOGGLE
	var aboutOpen=false;
	$('#about').click(function(){
		aboutOpen=!aboutOpen;
		if (aboutOpen) {
			$(this).animate({bottom: "0%", opacity: 1}, 800);
			$(this).css("z-index", "10");
		}
		else
		{
			$('#about').animate({bottom: "78%",opacity: .3}, 800);
			$('#about').css("z-index", "1");
		}
	});

	//CONTACT PAGE TOGGLE
	var contactOpen=false;
	$('#contact').click(function(){
		contactOpen=!contactOpen;
		if (contactOpen) {
			$(this).animate({right: "0%", opacity: 1}, 800);
			$(this).css("z-index", "10");
		}
		else
		{
			$('#contact').animate({right: "72%",opacity: .3}, 800);
			$('#contact').css("z-index", "2");
		}
	});

	//GITHUB PAGE TOGGLE
	var ghOpen=false;
	$('#github').click(function(){
		ghOpen=!ghOpen;
		if (ghOpen) {
			$(this).animate({top: "0%", opacity: 1}, 800);
			$(this).css("z-index", "10");
		}
		else
		{
			$('#github').animate({top: "84%",opacity: .3}, 800);
			$('#github').css("z-index", "3");
		}
	});

	//RESUME PAGE TOGGLE
	var resumeOpen=false;
	$('#resume').click(function(){
		resumeOpen=!resumeOpen;
		if (resumeOpen) {
			$(this).animate({left: "0%", opacity: 1}, 800);
			$(this).css("z-index", "10");
		}
		else
		{
			$('#resume').animate({left: "91%",opacity: .3}, 800);
			$('#resume').css("z-index", "4");
		}
	});

});