//封装获取元素的样式函数
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
	//兼容性判断处理
	//如果是IE8及以下的就采用前面的currentStyle属性，否则就用标准的getComputedStyle()方法
}
//移动效果封装函数
function move(el,atr,dir,target,endFn){		//参数1：移动对象  参数2："left"或"top"
                                       		//参数3：步长	参数4：最大距离	参数5：回调函数
	clearInterval(el.timer);			     //最开始点进来的时候清除的是box的未定义属性
	dir = parseInt(getStyle(el,atr)) < target ? dir : -dir;    //控制dir正负
	el.timer = setInterval(function(){
		var speed = parseInt(getStyle(el,atr))+dir;
		el.style[atr] = speed + "px";
		if(speed > target && dir>0 || speed < target && dir<0){
			speed = target;
		}
		//box在原来位置的基础上向右移动10px
		if(speed == target){
			clearInterval(el.timer);
			el.style[atr] = speed + "px";	//为了防止后面再点击出现继续移动的情况
			endFn && endFn();				//有回调函数就调用它，没有就不进行任何操作
		}
	},200);
}