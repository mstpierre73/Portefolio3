//check off todos when they are done
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Delete todos when clicking on trash can
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//adding new todos to the list
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		let todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});