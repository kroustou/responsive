$(function(){

	var body = $('body');
	$(document).on("scroll", function(){
		var scrollTop = $(document).scrollTop();
		if (scrollTop > "160"){
			body.addClass("fixed");
		} else {
			body.removeClass("fixed");
		}
	});
}());