//取隨機數
	var RND = function(a) { 
		Ans = Math.ceil(Math.random() * a);
		//console.log(Ans)
		return Ans;
	    }
//快速迴圈
   /* function LOOP(Function, n) {
		for(var i = 0; i < n; i++) {
			Function(10);
			
		}
	}*/
//取時間間隔	
	var ITV = function() {
		var ctrl = true
		var lastClick
		var t
		var Q
		$(window).keydown(
		function() {
			if(ctrl === true) {
				lastClick = new Date();
				ctrl = false;
			}else if(ctrl === false) {
				var d = new Date(); 
				t = d.getTime(); 
				Q = (t - lastClick) / 1000;
				lastClick = t;
			} 	
		}
		)
		return Q
	}
