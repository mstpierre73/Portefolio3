//check off todos when they are done
$("li").click(function() {
	$(this).toggleClass("completed");
});

//Delete todos when clicking on trash can
$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});