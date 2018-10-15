/*公共导航栏*/
$(".container .nav-content ul .titt").each(function(){
	$(this).hover(
		function(){
			$(this).find(".content").css({display:"block",zIndex:"1000"});
			$(this).find(".tit").css({background:"#ec6d3d","font-size":"18px","line-height":"90px"});
			$(this).find(".content ul li a").hover(
				function(){
					$(this).css({opacity:"1"})
				},
				function(){
					$(this).css({opacity:"0.7"})
				}
			)
		},
		function(){
			$(this).find(".content").css({display:"none"});
			$(this).find(".tit").css({background:"#f04e28","font-size":"14px","line-height":"110px"})
		}
	)
})