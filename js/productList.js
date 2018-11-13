$.ajax({
	type:"get",
	url:"php/getGoodsList.php",
	async:true,
	data:null,
	success:function(data){
		var goodsId = getCookie("goodsId");
		if(goodsId!=null){
			var productlist = '';
			for(var i=0;i<data.length;i++){
				if(data[i].goodsId == goodsId){
					$("#productTit").html(data[i].goodsName);
					$("#productPrice").html("¥"+data[i].goodsPrice);
					$("#sectionTit1").html(data[i].goodsCount);
					$(".imgs").css("backgroundImage","url("+data[i].goodsImg+")");
					$("#showBox").css("backgroundImage","url("+data[i].goodsImg+")");
					var names = data[i].goodsName;
					$("#join").click(function(){
						setCookie("goodsName",names,10);
					});
				}
			}
		};
	},
	dataType:"json",
});
$("#box").mouseover(function(){
	$("#FDJ").css({"display":"block"});
	$("#showBox").css({"display":"block"});
});

$("#box").mouseout(function(){
	$("#FDJ").css({"display":"none"});
	$("#showBox").css({"display":"none"});
});

$('#FDJ')[0].onmousedown = function(event){
		var ev = event || window.event;
		var mouseX = ev.clientX - this.offsetLeft;
		var mouseY = ev.clientY - this.offsetTop;
		$('#box')[0].onmousemove = function(event){
			var box = $('#box')[0];
			var fdj = $('#FDJ')[0];
			var ev = event || window.event;
			var left1 = ev.clientX - mouseX;
			var top1 = ev.clientY - mouseY;
			//边界处理
			var maxX = box.offsetWidth-fdj.offsetWidth;
			var maxH = box.offsetHeight-fdj.offsetHeight;
			left1 = Math.max(0,left1);
			left1 = Math.min(maxX,left1);
			top1 = Math.max(0,top1);
			top1 = Math.min(maxH,top1);
			
			fdj.style.left=left1+'px';
			fdj.style.top=top1+'px';
			$('#showBox')[0].style.backgroundPosition = (-3*left1)+"px "+(-3*top1)+"px";
		}
		// $('#box')[0].onmouseup = function(){
		// 	$('#FDJ')[0].onmousedown = $('#box')[0].onmousemove = null;
		// }
	}

$(".choiceImgs li").each(function(i){
	$(this).mouseover(function(){
		var url = $(this).css("backgroundImage").replace('url(','').replace(')','');
		console.log(url);
		$('#box').css({"backgroundImage":"url("+url+")"});
		$('#showBox').css({"backgroundImage":"url("+url+")"});
	})
})