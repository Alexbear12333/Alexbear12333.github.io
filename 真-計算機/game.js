var btn = $('.button'), ce = $('#ce'), dlet = $('#dlet'), oprt = $(".oprt"), equal = $('#equal');
var show = $('.show');
var d = 0, set = '無', continuous = false;
var x, y, Q;

function computer_resize() {
	var computer_w = $('.computer').width()
	$('.computer').height(computer_w * 4/3)
}

function fontSizeReset(name, n) {
    var hw = $('.computer').width()
	var hs = hw / n
    fontSize = $(name).css('font-size');
	var textFontSize = parseInt(fontSize); 
	var unit = fontSize.slice(-2);
	textFontSize = hs
	$(name).css("font-size",textFontSize + unit)
}

function All_resize() {
	computer_resize();
	if (show.text().length > 10) {
		fontSizeReset('.show', 11.36);
	} else{
		fontSizeReset('.show', 5.68);
	}
	fontSizeReset('.button', 15.2);
	fontSizeReset('.button2', 15.2);
	fontSizeReset('.button3', 15.2);
	fontSizeReset('.bbtn', 12.16);
};

$(window).resize(All_resize);
All_resize();

function input() {
	$this = $(this);

	
	if($this.data('i') === '=')
		return;
	else if($this.data('i') === '.') {
		if(d != 0)
			return;
		    d++;
	};
	
	if (show.text().length === 10)
		fontSizeReset('.show', 11.36);
	
	if(show.text() === '0') {
		if($this.data('i') === '.') {
			show.text(show.text()+$this.data('i'));
			return;
		}
		return;
	} 
	show.text(show.text()+$this.data('i'));
};

function Delete() {
	var showtext = show.text();
	showtext = showtext.substring(0, showtext.length - 1);
	if (showtext.length <= 10)
		fontSizeReset('.show', 5.68);
	show.text(showtext);
};

function clear() {
    fontSizeReset('.show', 5.68);
	window.d = 0;
	x = 0;
	y = 0;
	continuous = false;
	show.text('');
};

function calculation() {
	$this = $(this);
	if(continuous === true) {
		console.log(1)
		result();
	}
	x = show.text();
	x = Number(x);
	if($this.data('i') === '+') {
		window.set = '加法';
		console.log(5)
	}else if($this.data('i') === '-') {
		window.set = '減法';
	}else if($this.data('i') === 'x') {
		window.set = '乘法';
	}else if($this.data('i') === '/') {
		window.set = '除法';
	}else if($this.data('i') === '^') {
		window.set = '平方';
	}else if($this.data('i') === '!') {
		if(x % 1 != 0){
			show.text('錯誤');
		}else {
			Q=x;
			while(x>1){
			Q=Q*(x-1);x--;
			};
			Q = Q.toString();
			
			if(Q.length > 10) {
				fontSizeReset('.show', 11.36);
			}
			show.text(Q);
			//console.log(Q);
		}
		window.set = '無';
		window.d = 0;
		return;
	}else if($this.data('i') === '++') {
		if(x % 1 != 0) {
			show.text('錯誤');
		}else {
			Q=x;
			while(x>0){
				x--;Q=Q+x
			};
			Q = Q.toString();
			
			if(Q.length > 10) {
				fontSizeReset('.show', 11.36);
			}
			show.text(Q);
			//console.log(Q);
		}
		window.set = '無';
		window.d = 0;
		return;
	};
	
	
	show.text('');
	continuous = true
	
	
	fontSizeReset('.show', 5.68);
    //console.log(window.set)
    window.d = 0;
}; 

function result(){
	continuous = false;
	var set = window.set;
	y = show.text();
	y = Number(y);
	if(set === '無') {
		return;
	}else {
		if(set === '加法') {
			//console.log(x)
			//console.log(y)
		    Q=x+y;
			//console.log(Q)
	    }else if(set === '減法') {
		    Q=x-y;
	    }else if(set === '乘法') {
		    Q=x*y;
	    }else if(set === '除法') {
		    Q=x/y;
	    }else if(set === '平方') {
			if(y % 1 != 0) {
			    show.text('錯誤');
				window.set = '無';
	            window.d = 0;
				return;
		    }else {
				Q = 1;
				for(var n=1;n<=y;n++){
					Q=Q*x;
				}	
			}
	    };
	}
	Q = Q.toString();
	//console.log(Q.length);
    
	if(Q.length > 10) {
		fontSizeReset('.show', 11.36);
	}
	show.text(Q);
	//console.log(Q)
	window.set = '無';
	window.d = 0;
	
}

btn.click(input);

oprt.click(calculation);

dlet.click(Delete);

ce.click(clear);

equal.click(result)