$(document).ready(function(){
	$('#modal-toggle1').click(function(e){
		e.preventDefault();
		$('.modal').fadeIn(400);
	})
	$('#close1').click(function(e){
		e.preventDefault();
		$('.modal').fadeOut(500);
	})
})