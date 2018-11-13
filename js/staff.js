/*点击人物按钮出现对应的人物信息*/

/*无缝滚动轮播图*/
let currLeft = 0;
let myTimer = null;//赋初值为null
let directionLeft = -1;
//自动播放
function playImg(){
	if(myTimer!=null){
		return;
	}
	myTimer = setInterval(function(){
		//1、数据：
		//1)、改变left
		currLeft = currLeft+directionLeft*300;
		//2)、边界
		if(directionLeft==-1){
			if(currLeft<=-2100){
				currLeft=0;
			}
		}else if(directionLeft==1){
			if(currLeft>=0){
				currLeft=-2100;
			}
		}		
		//2、外观：
		$(".Rolling ul")[0].style.left = currLeft+"px";
	},3000);
}

//停止播放
function stopImg(){
	window.clearInterval(myTimer);
	myTimer = null;
}

function changeDirection(direction){
	directionLeft = direction;
}

window.onload = function(){
	// playImg();

	$(".icon-fa-angle-left")[0].onclick = function(){
		stopImg();
		$(".Rolling ul")[0].style.left = $(".Rolling ul")[0].offsetLeft + 300 +"px";
		console.log($(".Rolling ul")[0].offsetLeft);
		if($(".Rolling ul")[0].offsetLeft>=300){
			$(".Rolling ul")[0].style.left = -1800 +"px";
		}
	}
	$(".icon-fa-angle-right")[0].onclick = function(){
		stopImg();
		console.log($(".Rolling ul")[0].offsetLeft);
		$(".Rolling ul")[0].style.left = $(".Rolling ul")[0].offsetLeft - 300 +"px";
		if($(".Rolling ul")[0].offsetLeft<=-3300){
			$(".Rolling ul")[0].style.left = -1200 +"px";
		}
	}
	$(".icon-fa-angle-left")[0].onmouseleave = function(){
		// playImg();
	}
	$(".icon-fa-angle-right")[0].onmouseleave = function(){
		// playImg();
	}
}
