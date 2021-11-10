var HTML = window.localStorage.getItem('內容');
$('.content').html(HTML)
var a = $('.content>div>div');
var q = 1;


var Resize = function() {
	var w = $(window).width()
	$('.title').css('font-size', w / 25)
	$('.day').css('font-size', w / 15).width(w / 6.1)
	$('.NEW').width(w / 1.94).css('font-size', w / 30)
	$('.save').width(w / 1.94).css('font-size',  w / 30)	
	$('.content').width(w * (1000 / 1519.2)).css('font-size', 30 * w / 1519.2)
	$('.text').css('font-size',  w / 15)
}
Resize()

$(window).resize(Resize)

var inv = function(p) {	
	for(var x = 0; x <= a.length; x++) {
			a.eq(x).addClass('inv')
	}
};

inv();
a.eq(0).removeClass('inv');

$('.day').change(function() {	
	if($('.day').val() <=100 && $('.day').val() > 0) {
		//console.log($('.day').val())
		a.eq(q - 1).addClass('inv');
		a.eq($('.day').val() - 1).removeClass('inv');
		q = $('.day').val();
	}
});
   	
$('.putin').change(function() {	
    var a = $('.content>div>div')
    console.log($('.putin').val())
    if($('.putin').val() == "br/") {
		a.eq(a.length - 1).append("<br/>")
		$('.putin').val('')
	}else {
		var content = '<div>' + $('.putin').val() + '</div>'
		a.eq(a.length - 1).append(content)
		$('.putin').val('')
	}

});

$('.NEW').click(function() {
	inv();
	var NEWnote = $('<div class="NEWnote" ></div>');
    $('.content>div').append(NEWnote);
	$('.putin').removeClass('inv')
	$('.save').removeClass('inv')
	$('.NEW').addClass('inv')
})

$('.save').click(function() {
	window.localStorage.setItem('內容', $('.content').html());
	$('.NEW').removeClass('inv')
	$('.putin').addClass('inv')
	$('.save').addClass('inv')
	inv();
	a.eq(0).removeClass('inv');
})


