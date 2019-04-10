$(document).ready(function() {
    $("#change").click(function(){
    	$(".header").toggleClass("active");
    	$(".main").toggleClass("active");
    	$(".aside").toggleClass("active");
    });
});
