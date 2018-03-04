
$(document).ready(function(){
	$('#adventure2').click(function(){
		$('#box2').animate({
			opacity: 1
		}, 2000).css({
			display: 'flex'
		});
		$('#box1').css({
			display: 'none'
		});
		$('#box3').css({
			display: 'none'
		});
		$('#box4').css({
			display: 'none'
		});
	});
	$('#adventure3').click(function(){
		$('#box3').animate({
			opacity: 1
		}, 2000).css({
			display: 'flex'
		});
		$('#box1').css({
			display: 'none'
		});
		$('#box2').css({
			display: 'none'
		});
		$('#box4').css({
			display: 'none'
		});
	});
	$('#adventure4').click(function(){
		$('#box4').animate({
			opacity: 1	
		}, 2000).css({
			display: 'flex'
		});
		$('#box1').css({
			display: 'none'
		});
		$('#box3').css({
			display: 'none'
		});
		$('#box2').css({
			display: 'none'
		});
	});
	$('#adventure1').click(function(){
		$('#box1').animate({
			opacity: 1
		}, 2000).css({
			display: 'flex'
		});
		$('#box1').css({
			display: 'none'
		});
		$('#box3').css({
			display: 'none'
		});
		$('#box2').css({
			display: 'none'
		});
	});
}); 


















