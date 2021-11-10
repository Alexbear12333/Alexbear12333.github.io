var UporDown = true;
var UporDown2 = true;
var UporDown3 = true;

$('.menu_0').click(function() {
	if(UporDown === true) {
		$('.choose').slideDown(700);
		UporDown = false;
	}else if(UporDown === false) {
		$('.choose').slideUp(700);
		UporDown = true;
	}
	
});
$('.menu_1').click(function() {
	if(UporDown2 === true) {
		$('.choose2').slideDown(800);
		UporDown2 = false;
	}else if(UporDown2 === false) {
		$('.choose2').slideUp(800);
		UporDown2 = true;
	};
	
});
$('.menu_2').click(function() {
	if(UporDown3 === true) {
		$('.choose3').slideDown(800);
		UporDown3 = false;
	}else if(UporDown2 === false) {
		$('.choose3').slideUp(800);
		UporDown3 = true;
	};
	
});
$('.htmlname').click(function() {
	$('IFRAME').addClass('inv');
	$('.content').removeClass('inv');
	$('.text>div').addClass('inv');
	$('.text').addClass('inv');
})

var resize = function() {
	var w = $(window).width()
	$('IFRAME').height($(window).height() - $('.title').height());
	$('.title').css('font-size', w / 25);
	$('.content').css('font-size', w / 40);
	$('.choose').css('font-size',  w / 40)
	$('.choose2').css('font-size',  w / 55);
	$('.choose3').css('font-size',  w / 75);
};
resize();
$(window).resize(resize)
$('a').click(function() {
	$('IFRAME').removeClass('inv');
	console.log($(this).data('i'));
	$('.content').addClass('inv');
	$('.text>div').addClass('inv');
	$('.text').removeClass('inv');
	$('.text>div').eq($(this).data('i') - 1).removeClass('inv');
	$('.choose').slideUp(700);
		UporDown = true;
})
$(window).resize(resize);
