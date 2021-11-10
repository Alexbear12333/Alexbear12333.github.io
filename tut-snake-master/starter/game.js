"use strict";
var disp = $('.disp'),//#b8e62e
    msg = $('.msg');
var gameRunning
var gameInterval
var currentCoin
var	timeStep,currTime,frameStep;
var BAD_MOVE = 1, ACE_MOVE = 2, GOOD_MOVE = 3
var availablePixels
var dispWidthInPixels = 40;

var beep = document.createElement('audio'),
    gameover = document.createElement('audio')
	if(!!(beep.canPlayType && beep.canPlayType('audio/mpeg').replace(/no/,''))) {
		beep.src = 'beep.mp3';
		gameover.src = 'gameover.mp3';
	} else {
		beep.src = 'beep.ogg';
		gameover.src = 'gameover.ogg';
	}
	
for (var i = 0; i < dispWidthInPixels; i++) {
	for (var j = 0; j < dispWidthInPixels; j++) {
		var tmp = $('<div class="pixel" data-x="' + j +'" data-y="' + i + '"></div>')
		disp.append(tmp);
	} 
}

var showMessage = function(ma, mb) {
	msg.find('.msg-a').text(ma);
	msg.find('.msg-b').text(mb);
};

var useNextRandomPixelForCoin = function() {
	var ap = availablePixels;
	if (ap.length === 0) {
		return false;
	}
	var idx = Math.floor(Math.random() * ap.length);
	currentCoin = ap.splice(idx, 1)[0].split('|');
	$('div.pixel[data-x="' + currentCoin[0] + '"][data-y="' + currentCoin[1] +'"]').addClass('takenfood');
	return true;
};

var tryAllocatingPixel = function(x, y) {
	var ap = availablePixels;
	var p = x + '|' + y
	var idx = ap.indexOf(p);
	if (idx !== -1) {
		ap.splice(idx, 1);
		$('div.pixel[data-x="' + x + '"][data-y="' + y + '"]').addClass('taken');
		return true;
	} else {
		return false;	
	}
};

var releasePixel = function(x, y) {
	$('div.pixel[data-x="' + x + '"][data-y="' + y +'"]').removeClass('taken');
	availablePixels.push(x + '|' + y);
}

var releasePixel2 = function(x, y) {
	$('div.pixel[data-x="' + x + '"][data-y="' + y +'"]').removeClass('takenfood');
	$('div.pixel[data-x="' + x + '"][data-y="' + y +'"]').addClass('taken');	
	availablePixels.push(x + '|' + y);
}

var adjustSpeed = function(l) {
	if (l >= 500) {
		frameStep = 50;
	} else if (l >= 400) {
		frameStep = 100;
	} else if (l >= 300) {
		frameStep = 150;
	} else if (l >= 200) {
		frameStep = 200;
	} 
};

var DIR_UP = 'u',
    DIR_DOWN = 'd',
	DIR_RIGHT = 'r',
    DIR_LEFT = 'l'

var snake = {
	direction: 'l',
	bodyPixels: [],
	move: function() {
		var head = this.bodyPixels[this.bodyPixels.length - 1];
		
		var nextHead = [];
		if (this.direction === DIR_LEFT) {
			nextHead.push(head[0] - 1);
		} else if (this.direction === DIR_RIGHT){
			nextHead.push(head[0] + 1);
		} else {
			nextHead.push(head[0]);
		}
		
		if (this.direction === DIR_UP) {
			nextHead.push(head[1] - 1);
		} else if (this.direction === DIR_DOWN){
			nextHead.push(head[1] + 1);
		} else {
			nextHead.push(head[1]);
		}
		
		if (nextHead[0] == currentCoin[0] && nextHead[1] == currentCoin[1]) {
			releasePixel2(nextHead[0], nextHead[1]);
			this.bodyPixels.push(nextHead);
			beep.play()
			adjustSpeed(this.bodyPixels.length);
			if (useNextRandomPixelForCoin()) {
				return GOOD_MOVE;
			} else {
				return ACE_MOVE;
			}
		} else if (tryAllocatingPixel(nextHead[0], nextHead[1])) {
			var tail = this.bodyPixels.splice(0,1)[0];
			this.bodyPixels.push(nextHead);
			releasePixel(tail[0], tail[1]);
			return GOOD_MOVE;
		} else {
			return BAD_MOVE;
		}
	}
};	

var initializeGame = function() {
	frameStep = 250;
	timeStep = 50;
	currTime = 0;
	
	$('.pixel').removeClass('taken');
	$('.pixel').removeClass('takenfood');
	availablePixels = []
    for(var i = 0; i < dispWidthInPixels; i++) {
		for (var j = 0; j < dispWidthInPixels; j++) {
			availablePixels.push(i + '|' + j);
		}
	}

    snake.direction = 'l';
    snake.bodyPixels = [];
    for	(var i = 29, end = 29 - 16; i > end; i--) {
		tryAllocatingPixel(i, 25);
		snake.bodyPixels.push([i, 25]);
	}
	
	useNextRandomPixelForCoin(); 
}

var startMainLoop = function() {
	gameInterval = setInterval(function() {
		currTime += timeStep;
		if (currTime >= frameStep) {
			var m = snake.move();
			if (m === BAD_MOVE) {
				clearInterval(gameInterval);
				gameRunning = false;
				gameover.play();
				showMessage('Game Over','Press spece to start again');
				
			} else if (m === ACE_MOVE) {
				clearInterval(gameInterval);
				gameRunning = false;
				showMessage('You Won','Press spece to start again');
				
			}
			
			currTime %= frameStep;
		}
	},timeStep);
	showMessage('','')
};

$(window).keydown(function(e) {
    var k = e.which;
	
	// up
	if (k === 38) {
		e.preventDefault()
		if(snake.direction !== DIR_DOWN)
		   snake.direction = DIR_UP;
	   
	// down
	} else if (k === 40) {
		e.preventDefault()
		if(snake.direction !== DIR_UP)
		   snake.direction = DIR_DOWN;
	   
	// left
	} else if (k === 37) {
		e.preventDefault()
		if(snake.direction !== DIR_RIGHT)
		   snake.direction = DIR_LEFT;
	   
	// right
	} else if (k === 39) {
		e.preventDefault()
		if(snake.direction !== DIR_LEFT) 
		   snake.direction = DIR_RIGHT;
	   
	// spece
    } else if (k === 32) {
		e.preventDefault()
		if (!gameRunning) {
			initializeGame();
			startMainLoop();
			gameRunning = true
		}
		
	// p
	} else if (k === 80) {
		e.preventDefault()
		if (gameRunning) {
			if (!gameInterval) {
				startMainLoop();
			} else {
				clearInterval(gameInterval);
				gameInterval = null;
				showMessage('Paused','')
			}
		}
		
	// f, for left turn 
	} else if (k === 70) {
		e.preventDefault()
		if (snake.direction === DIR_DOWN){
			snake.direction = DIR_RIGHT;
		} else if (snake.direction === DIR_RIGHT) {
			snake.direction = DIR_UP;
		} else if (snake.direction === DIR_UP) {
			snake.direction = DIR_LEFT;
		} else if (snake.direction === DIR_LEFT) {
			snake.direction = DIR_DOWN;
		}
		
	// j, for rught turn
	} else if (k === 74) {
		e.preventDefault()
		if (snake.direction === DIR_RIGHT){
			snake.direction = DIR_DOWN;
		} else if (snake.direction === DIR_UP) {
			snake.direction = DIR_RIGHT;
		} else if (snake.direction === DIR_LEFT) {
			snake.direction = DIR_UP;
		} else if (snake.direction === DIR_DOWN) {
			snake.direction = DIR_LEFT;
		}
    }
})

showMessage('Snake', 'Press space to start')