
var a = '石頭', s = '剪刀', d = '布'



function box_resize() {
	var w = $('.box').width();
	var h = $('.box').height(w * 0.4);
	$('.box').height(w * 0.4);
	$('.box').css({'font-size': w * 0.175 + 'px'})
}
box_resize()

$(window)
.resize(box_resize)
.keydown(function(e) {
	k = e.which
	if(k === 65 || k === 83 || k === 68) {
	if(k === 65) {
		$('#player1').text(a)
	}else if(k === 83) {
		$('#player1').text(s)
	}else if(k === 68) {
		$('#player1').text(d)
	}
	
	if(RND(300000000) <= 100000000) {
		$('#player2').text(a)
	}else if(RND(300000000) <= 200000000) {
		$('#player2').text(s)
	}else if(RND(300000000) <= 300000000) {
		$('#player2').text(d)
	}
	}
})
