$("header").load("public.html");
$(".shops").hover(
	function(){
		$(this).find(".prod-info").css({
			zIndex:"1"
		});
		$(this).find(".zhezhao").animate({
			bottom:0,
		},500);
	},
	function(){
		$(this).find(".zhezhao").animate({
			bottom:"-85px",
		},500);
	}
);
$(".gwc").click(function(){
	location.href = "index.html";
})