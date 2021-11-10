"use strict"

var b = $('.button');
var b2 = $('.button2');
var input = $('.input')
var btn1 = $('.btn1');
var btn2 = $('.btn2');
var set = false;

var 十進轉二進 = function() {
	var k = input[0].value;
	console.log(k)
	var a;
	var p = k % 2; 
	
	k = parseInt(k / 2);
	a = p.toString();
	console.log(typeof a);
	//console.log(a);
	
	for(;k > 0;) {
		var p = k % 2; 
	    k = parseInt(k / 2);
	    a = p + a;
		a = a.toString();
	    //console.log(typeof a)
		//console.log(p)
	
	};
	
	if(a == 'NaN') {
		a = '錯誤'
		console.log(12)
	};
	
	input.val(a);
	input.prop('readonly',true);
	input.addClass('un')
	b.addClass('inv');
	b2.removeClass('inv');
	}

var 二進轉十進 = function() {
	var k = input[0].value;
	if(k == 0) {input.val(0);
	    input.prop('readonly',true);
	    input.addClass('un')
	    b.addClass('inv');
	    b2.removeClass('inv');
		return
	}
	var n = 0;
	var a = 0;
	var remainder = []
	for(;k > 1;n++) {
		if(k % 10 > 1) {
			input.val('錯誤');
	        input.prop('readonly',true);
	        input.addClass('un')
	        b.addClass('inv');
	        b2.removeClass('inv');
			return;
		}
		remainder.push(k % 10);
		k = parseInt(k/10);
	}
	remainder.push(1)
	//console.log(remainder + ',' + n)
	for(;n >= 0;n--) {
		var ans = 1;
		for(var i = n; i > 0; i--) {
			ans = ans * 2;
			//console.log(ans);
		}
		//console.log(remainder[n])
		ans = remainder[n] * ans
		a = a + ans;
	}
	input.val(a);
	input.prop('readonly',true);
	input.addClass('un')
	b.addClass('inv');
	b2.removeClass('inv');

}

  btn1.click(function(){
	  btn1.addClass('choose');
      btn2.removeClass('choose');
      window.set = false
  } 
  )

  btn2.click(function(){
	  btn2.addClass('choose');
      btn1.removeClass('choose');
      window.set = true
  }  
  ) 

var choose = function() {
	if(set === false) {
		十進轉二進()
	}
	if(set === true) {
		二進轉十進()	
	}
}

var Reset = function() {
	input.val('');
	input.prop('readonly',false);
	input.removeClass('un')
	b.removeClass('inv');
	b2.addClass('inv');
}

b.click(choose)
b2.click(Reset);