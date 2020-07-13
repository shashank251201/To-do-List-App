$("ul").on("click", "li" ,function(){
	$(this).toggleClass("selected");
});

$("ul").on("click", "span" ,function(event){
     $(this).parent().fadeOut(400, function(){
     	$(this).remove();
     });
     event.stopPropagation();
});

$("input").on("keypress" , function(event){
	if(event.which ===13){
		var newTodo = $(this).val();
		$("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span>" + newTodo + "</li>");
		$(this).val("");
	}
    
});

$(".fa-plus").on("click", function(){
	$("input").fadeToggle();
});