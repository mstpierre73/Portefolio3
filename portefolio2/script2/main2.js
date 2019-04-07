$(document).ready(function (){
	$('#change').click(function() {
	$('.header').css("background-image","url('img2/neige.jpg')");
	$('.main').css("background-image","url('img2/foret.jpg')");
	$('.aside').css("background-image","url('img2/poste.jpg')");
	var header = $(".header").getAttribute("url");
});
});

/*

$(document).ready(function(){
	$('#change').click(function(){
		var coquillage = "url('img2/coquillages.jpg')";
		var vagues = $(".main").css("background-image");
		var plage = $(".aside").css("background-image");

		if($("#surprise").css("background-image") == coquillage){
			$('.header').css("background-image","url('img2/neige.jpg')");
			$('.main').css("background-image","url('img2/foret.jpg')");
			$('.aside').css("background-image","url('img2/poste.jpg')");
		}

		else {
			$('.header').css("background-image","url('img2/coquillages.jpg')");
			$('.main').css("background-image","url('img2/vagues.jpg')");
			$('.aside').css("background-image","url('img2/bouteille.jpg')");}
		});
	});

*/
















