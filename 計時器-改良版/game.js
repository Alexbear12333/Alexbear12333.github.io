"use strict";
var number = $('.number > .num1');
var end = true;  
var mode = true,Status = 0
var i = 0;
var s1 = 0, s10 = 0, m1 = 0, m10 = 0;
var 個秒 = $('#0'), 十秒 = $('#1'), 個分 = $('#2'), 十分 = $('#3');
var n = $('.number');
var b = $('.button'), b2 = $('.button2'), b3 = $('.button3'), cb = $('.ChooseButton'), cb2 = $('.ChooseButton2')
var time
//var flashing

var set倒數 = function() {
	window.s1 = 0;
	window.s10 = 0;
	window.m1 = 0;
	window.m10 = 6;
	個秒.text(s1); 
	十秒.text(s10);
	個分.text(m1); 
	十分.text(m10);
	window.m1 = 10;
	window.s1 = 10;
};

var set計時 = function() {
	window.s1 = 0;
	window.s10 = 0;
	window.m1 = 0;
	window.m10 = 0;
	個秒.text(s1); 
	十秒.text(s10);
	個分.text(m1); 
	十分.text(m10);
};

/*var flash = function() {
         if(i % 2 === 0) {
                  number.addClass('inv'); i++;	   
         } else{
                  number.removeClass('inv'); i++;
         };
		 }*/

	

	
		//e.preventDefault();
        
var 倒數 = function() { 
     if(s1 === 10 && s10 === 0 && m1 === 10 && m10 === 0){
			clearInterval(time)
		}else{
		if(s1 < 10){
		s1--; //x
		個秒.text(s1);
		if(s1 === 0) {
		   s1 = 10 
		}
	 } else if(s1 === 10) {
		 if(s10 > 0) {
			 s1--;  //x
			 s10--; 
			 個秒.text(s1); 
			 十秒.text(s10);
			  //if(s10 === 0) {
			 	 
			 //   			 }
		 } else if(s10 === 0) {
		     s10 = 6; 
			 s10--;
			 s1--
			 個秒.text(s1); 
			 十秒.text(s10);
			 if(m1 < 10) {
				 m1-- 
				 個分.text(m1);
				 if(m1 === 0) {
					 m1 = 10;
				 }
			 } else if(m1 === 10) {
			 	 m1--;
				 m10--
				 個分.text(m1); 
				 十分.text(m10); 
			    			 }
		 }};
		 
		}
};
		 
//var time = setInterval(倒數,1000)
		
	
var 計時 = function() {
	 if(m10 === 6 && m1 === 0 && s10 === 0 && s1 === 0) {
		 clearInterval(time) 
	 }else {
	 if(s1 < 9){
		s1++;
		個秒.text(s1); 
	 } else if(s1 === 9) {
		 if(s10 < 5) {
			 s1 = 0;  
			 s10++; 
			 個秒.text(s1); 
			 十秒.text(s10);
		 } else if(s10 === 5) {
		     s10 = 0; 
			 s1 = 0; 
			 個秒.text(s1); 
			 十秒.text(s10);
			 if(m1 < 9) {
				 m1++ ;
				 個分.text(m1);
			 } else if(m1 === 9) {
			 if(m10 < 5) {
				 m1 = 0;
				 m10++
				 個分.text(m1); 
				 十分.text(m10); 
			 } else if(m10 === 5) {
				 m1 = 0;
				 m10++
				 個分.text(m1); 
				 十分.text(m10);
			 }  
			 }
		 }}
}
};
	

var start = function() {
	window.end = false;
	b.addClass('inv');
	b2.removeClass('inv');
	if(mode === true) {
	   window.time = setInterval(計時,1000);
	}else if(mode === false) {
	   window.time = setInterval(倒數,1000);
	}
	window.Status = 1
};

var stop = function() {
	clearInterval(time);
	number.removeClass('inv')
	b2.addClass('inv');
	b3.removeClass('inv');
	window.Status = 2;
}

var Splice = function() {
	if(mode === true) {
	   window.time = setInterval(計時,1000);
	}else if(mode === false) {
	   window.time = setInterval(倒數,1000);
	}
	b3.addClass('inv');
	b2.removeClass('inv');
	window.Status = 1;
}

        //var time = setInterval(second,10)
  $(window).keydown(function(e) {
	  e.preventDefault();
	  var k = e.which;
	  if(k === 32) {
		  if(window.Status === 0){
			  start()
		  }else if(window.Status === 1){
			  stop()
		  }else if(window.Status ===  2){
			  Splice()
		  }
	  }
  })
  
var chooseCB = function() {
	if(Status === 1) {
		return
	}
	cb.addClass('choose');
	cb2.removeClass('choose');
	b.removeClass('inv')
	b2.addClass('inv');
	b3.addClass('inv');
	set計時();
	window.mode = true;
}

var chooseCB2 = function() {
	if(Status === 1) {
		return
	}
	cb2.addClass('choose');
	cb.removeClass('choose');
	b.removeClass('inv')
	b2.addClass('inv');
	b3.addClass('inv');
	set倒數();
	window.mode = false;
}

  
  cb.click(chooseCB)
  cb2.click(chooseCB2)
  b.click(start);
  b2.click(stop)
  b3.click(Splice)