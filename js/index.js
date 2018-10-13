let s1 = new Slider($(".slider"),913,456,["img/index/home1_lunbo_01.jpg","img/index/home1_lunbo_02.jpg","img/index/home1_lunbo_03.jpg","img/index/home1_lunbo_04.jpg","img/index/home1_lunbo_01.jpg","img/index/home1_lunbo_02.jpg"],
				30,"gray","#1add9f",
				true,-1,3000);
$(".header-title-nav ul li").each(function(){
	$(this).hover(
		function(){
			$(this).css({
				transition:"all 2s linear",
				transform:"scale(1.5)"
			})
		},
		function(){
			$(this).css({
				transition:"all 2s linear",
				transform:"scale(1)"
			})
		}
	)
});