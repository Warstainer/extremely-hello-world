$(document).ready(function(){

$(".articles").mouseover(function() {
	$(".paragraph").css({"transition":"all .4s ease-in-out","padding-top":"1em"});
	})
$(".articles").mouseout(function() {
	$(".paragraph").css({"transition":"all .4s ease-in-out","padding-top":"3em"});
	})

// laser beam
// $(".learnMore").mouseover(function (){
// 	$(this).html("Laser Beam!")
// });
// $(".learnMore").mouseout(function (){
// 	$(this).html("Learn More!")
// });
})