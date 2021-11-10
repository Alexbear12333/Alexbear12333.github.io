
var canvaswidth = 19, color = 'black';
var mode = 'put'

function Reset_size() {
	var w = $(window).width();
	var h = $(window).height();
	$('.canvas').css('left', (w * 0.5) - 351.5 + 'px' );
	$('.player1').css('left', (w * 0.25) - 250.75 + 'px');
	$('.player1').css('top', (h * 0.5) - 75 + 'px');
	$('.player2').css('right', (w * 0.25) - 250.75 + 'px');
	$('.player2').css('top', (h * 0.5) - 75 + 'px');
	$('.reset').css('left', (w * 0.5) - 461.5 + 'px');
	$('.take').css('right', (w * 0.5) - 461.5 + 'px');
	$('.reset').css('font-size', $('.reset').width * 0.25 + 'px');
	$('.take').css('font-size', $('.take').width * 0.25 + 'px');
	
}
Reset_size();
$(window).resize(Reset_size);

var canvas = function() {
	for(var i = 0; i < canvaswidth; i++) {
		for(var n = 0; n < canvaswidth; n++) {
			//邊-上
			if(i === 0) {
				if(n === 0) {
					var p = $('<div class="pixel topleftcorner Original_6" data-x="' + i + '" data-y="' + n + '"></div>');
				}else if(n === canvaswidth - 1) {
					var p = $('<div class="pixel toprightcorner Original_7" data-x="' + i + '" data-y="' + n + '"></div>');
				} else{			
					var p = $('<div class="pixel top Original_2" data-x="' + i + '" data-y="' + n + '"></div>');
				};
			}
			//邊-下
			else if(i === canvaswidth - 1) {
				if(n === 0) {
					var p = $('<div class="pixel buttomleftcorner Original_8" data-x="' + i + '" data-y="' + n + '"></div>');
				}else if(n === canvaswidth - 1) {
					var p = $('<div class="pixel buttomrightcorner Original_9" data-x="' + i + '" data-y="' + n + '"></div>');
				} else{			
					var p = $('<div class="pixel buttom Original_3" data-x="' + i + '" data-y="' + n + '"></div>');
				};
			}
			//邊-左
			else if(n === 0) {
				var p = $('<div class="pixel left Original_4" data-x="' + i + '" data-y="' + n + '"></div>');
			}
			//邊-右
			else if(n === canvaswidth - 1) {
				var p = $('<div class="pixel right Original_5" data-x="' + i + '" data-y="' + n + '"></div>');
			}
			//內部
			else {
				if(i === 3 || i === 9 || i === 15) {
					if(n === 3) {
						var p = $('<div class="pixel star Original_10" data-x="' + i + '" data-y="' + n + '"></div>');
					}else if(n === 9) {
						var p = $('<div class="pixel star Original_10" data-x="' + i + '" data-y="' + n + '"></div>');
					}else if(n === 15) {
						var p = $('<div class="pixel star Original_10" data-x="' + i + '" data-y="' + n + '"></div>');
					} else{			
						var p = $('<div class="pixel itl Original_1" data-x="' + i + '" data-y="' + n + '"></div>');
					};
				} else{			
					var p = $('<div class="pixel itl Original_1" data-x="' + i + '" data-y="' + n + '"></div>');
				};
			}
			$('.canvas').append(p);
		}
	}
}
canvas();

var clear = 'Original_1 Original_2 Original_3 Original_4 Original_5 Original_6 Original_7 Original_8 Original_9 Original_10 fill1 fill2'

var Click = function() {
	var x, y;
	if(mode === 'put') {
		if(! $(this).is('.fill1') && ! $(this).is('.fill2')) {
			if(color === 'black') {
				$(this).removeClass(clear);
				$(this).addClass('fill1');
				color = 'white';
				$('.player1').addClass('hide')
				$('.player2').removeClass('hide')
				//
			    
			}else if(color === 'white') {
				$(this).removeClass(clear);
				$(this).addClass('fill2');
				color = 'black';
				$('.player2').addClass('hide')
				$('.player1').removeClass('hide')
				/*x = $(this).data('x')
				y = $(this).data('y')
				console.log(x+','+y)
				console.log( $('div.pixel[data-x="' + (x + 1) + '"][data-y="' + y + '"]').is('.fill1'))*/
			}
		}	
	} else if(mode === 'take') {
		console.log('taken');
		$(this).removeClass(clear)
		if($(this).is('.itl')){
			$(this).addClass('Original_1')
		}
		else if($(this).is('.top')) {
			$(this).addClass('Original_2')
		}
		else if($(this).is('.topleftcorner')) {
			$(this).addClass('Original_6')
		}else if($(this).is('.toprightcorner')) {
			$(this).addClass('Original_7')
		}else if($(this).is('.buttom')) {
			$(this).addClass('Original_3')
		}else if($(this).is('.buttomleftcorner')) {
			$(this).addClass('Original_8')
		}else if($(this).is('.buttomrightcorner')) {
			$(this).addClass('Original_9')
		}else if($(this).is('.left')) {
			$(this).addClass('Original_4')
		}else if($(this).is('.right')) {
			$(this).addClass('Original_5')
		}else if($(this).is('.star')) {
			$(this).addClass('Original_10')
		}
	}
}

var take = function() {
	mode = 'take';
	$('#cancel').removeClass('hide');
	$('#clear').addClass('hide');
}

var cancel = function() {
	mode = 'put';
	$('#clear').removeClass('hide');
	$('#cancel').addClass('hide');
}

var Reset = function() {
	$('.pixel').removeClass(clear);
	$('.itl').addClass('Original_1');
	$('.left').addClass('Original_4');
	$('.right').addClass('Original_5');
	$('.top').addClass('Original_2');
	$('.topleftcorner').addClass('Original_6');
	$('.toprightcorner').addClass('Original_7');
	$('.buttom').addClass('Original_3');
	$('.buttomleftcorner').addClass('Original_8');
	$('.buttomrightcorner').addClass('Original_9');
	$('.star').addClass('Original_10');
	$('.player2').addClass('hide');
	$('.player1').removeClass('hide');
	color = 'black';
}

$('.pixel').click(Click);
$('.reset').click(Reset);
$('#clear').click(take)
$('#cancel').click(cancel)
$(window).keydown(function(e) {
	k = e.which;
	if(k === 32) {
		e.preventDefault;
		if($('#cancel').is('.hide')) {
			take()
		}else if($('#clear').is('.hide')) {
			cancel()
		}
		
	}	
	
})
