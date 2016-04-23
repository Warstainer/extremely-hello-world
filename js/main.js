$(document).ready(function(){

$(".articles").mouseover(function() {
	$(".paragraph").css({"transition":"all .4s ease-in-out","padding-top":"1em"});
	})
$(".articles").mouseout(function() {
	$(".paragraph").css({"transition":"all .4s ease-in-out","padding-top":"3em"});
	})

})