$(window).keydown(

	 function() {
		var ctrl = true
		var lastClick
		var t
		var Q
		var record = 0
		$(window).keydown(
		function() {
			if(ctrl === true) {
				lastClick = new Date();
				ctrl = false;
			}else if(ctrl === false) {
				var d = new Date(); 
				t = d.getTime();
				$('.box').text((t - lastClick) / 1000);
				lastClick = t;
			} 	
		}
		)
		
	}


)
