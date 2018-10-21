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
	location.href = "shoppingCart.html";
});
$(".shopMain ul li").each(function(){
	// 
	$(this).click(function(){
		var ids = $(this).attr("id");
		$.ajax({
			type:"get",
			url:"php/getGoodsList.php",
			async:true,
			data:null,
			success:function(data){
				setCookie("goodsId",ids,10);
				location.href = "productList.html";
			},
			dataType:"json",
		});
	});
})