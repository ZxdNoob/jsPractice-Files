window.onload = function(){
	var imgArr = ["../img/1.jpg","../img/2.jpg","../img/3.jpg"];			//图片路径
	var aImg = document.getElementsByTagName("img");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	aImg[1].onclick = function(){
		change2();
	}
	aImg[2].onclick = function(){
		change1();
	}
	prev.onclick = function(){
		change2();
	}
	next.onclick = function(){
		change1();
	}

	//点击第三张图片或者前进按钮时触发的函数
	function change1(){
		imgArr.unshift(imgArr.pop());
		lookfor();
	}
	//点击第二张图片或者后退按钮时触发的函数
	function change2(){
		imgArr.push(imgArr.shift());
		lookfor();
	}

	function lookfor(){
		for(var i = 0;i<aImg.length;i++){
			aImg[i].src = imgArr[i];
		}
	}
}