"use strict";
var number = $('.number > .num1');
var end = 0;  
var i = 0;
var s1 = 10, s10 = 0, m1 = 10, m10 = 6
var 個秒 = $('#0'), 十秒 = $('#1'), 個分 = $('#2'), 十分 = $('#3')
var n = $('.number')

var set = function() {個秒.text(s1); 
			          十秒.text(s10);
					  個分.text(m1); 
				      十分.text(m10);
				      }

var flashing = function(x) {setInterval(function() {
         if(i % 2 === 0) {
                  number.addClass('inv'); i++;	   
         } else{
                  number.removeClass('inv'); i++;
         };}, 500) 
}
	
var dd = function() {
	
		//e.preventDefault();
        
		var second = function() { 
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
		 
		var time = setInterval(second,1000)
		
	; }
	
var second = function() {setInterval(function() {
	 if(m10 === 6 && m1 === 0 && s10 === 0 && s1 === 0) {
		 clearInterval(second) 
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
				 m1++ 
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
}}, 1000) 
};	

        //var time = setInterval(second,10)
$(window)
  //.resize()
  .keydown(function(e) {
    var k = e.which;
	
	if(end === 0) {
	  if(k === 68) {	
	    dd()
		end++
	  } else if(k === 83) {
        s1 = 0; 
	    s10 = 0; 
	    m1 = 0; 
	    m10 = 0;
	    set()
	    second()
	    end++
	}
	flashing()
	}
	
	
    }
	);

