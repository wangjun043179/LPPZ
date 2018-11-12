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
						$("#total").html("0.0");
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
		// 点击数量按钮时，即数量变化时
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
				// 如果数量小于等于0，数量按钮固定为0
				this.value = "0";
				// 这个商品的总价变为0.00
				span.html("0.00");
			}else{
				// 如果数量大于0，计算这个商品的总价
				span.html((price*nums).toFixed(1));
			}
			// 调用合计函数，计算价格
			total();
		});
	});

	// 全选插件
	$("#checkAll").bindCheck($(".shmid :checkbox"),$(""));
    // 当点击复选框时，调用合计函数
    $(".check").click(function(){
        total();
    });
    // 当点击全选框时，调用合计函数
    $("#checkAll").click(function(){
        total();
    });

	// 合计函数
	function total(){
		//合计
		$("#total").html("0.00");
		// 循环所有的商品的总价
		$(".zongPrice span").each(function(){
			// 如果当前商品的复选框是选中的，才把这个商品的总价计算到合计里
			if($(this).parents(".tr").find(".check").prop("checked")){
				$("#total").html((parseFloat($("#total").html())+parseFloat($(this).html())).toFixed(1));
			}
		});
	}
}