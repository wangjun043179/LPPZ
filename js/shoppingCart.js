window.onload = function(){
	$.ajax({
		type:"get",
		url:"php/getGoodsList.php",
		async:true,
		data:null,
		success:function(data){
			var goodsName = getCookie("goodsName");
			if(goodsName!=null){
				var productlist = '';
				for(var i=0;i<data.length;i++){
					if(data[i].goodsName == goodsName){
						$("#ProductName").html(data[i].goodsName);
						$(".price span").html(data[i].goodsPrice);
						$(".zongPrice span").html(data[i].goodsPrice);
						$("#total").html(data[i].goodsPrice);
						$("#ProductImg").attr("src",data[i].goodsImg);
					}
				}
			};
		},
		dataType:"json",
	});
	//删除
	//先获取所有的删除按钮
	let remove =$(".removeBtn");
	//循环这些按钮
	for(let i=0;i<remove.length;i++){
		remove[i].onclick = function(){
			var del = window.confirm("你确定要删除吗？？？")
			//点击对应的删除按钮时，删除这个按钮的父元素的父元素，即删除这个input的父元素td的父元素tr,即点击对应删除按钮时，删除这一行
			if(del){
				this.parentNode.parentNode.remove();
			}
			//当点击删除时，调用合计函数，重新判断当前合计的价格
			total();
		}
	}
	//价格
	//循环这些数量按钮
	$(".numBtn").each(function(){
		$(this).click(function(){
			//点击数量按钮，获取它的值
			let nums = $(this).val();
			//单价
			//通过点击的那一个input标签的父元素td的上一个节点td的innerHTML取整可以得到单价
			let price = parseFloat($(this).parents(".tr").find(".price span").html());

			//总价
			//找到总价那一列显示数据的span标签，通过点击的那一个input标签的父元素td的下一个节点td的第一个孩子节点找到span
			let span = $(this).parents(".tr").find(".zongPrice span");
			
			//数量不能小于0
			if(nums<=0){
				this.value = "0";
				span.html("0");
			}else{
				span.html(price*nums);
			}
			total();
		});
	});
	// 合计函数
	function total(){
		//合计
		$("#total").html("0");
		$(".zongPrice span").each(function(){
			$("#total").html(parseFloat($("#total").html())+parseFloat($(this).html()));
		});
	}
}