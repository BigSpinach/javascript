/*
	给#box下的li实现奇偶行变色（颜色自己定）   
	鼠标滑过li背景高亮展示，鼠标离开回归原有颜色   
	鼠标点击li弹出 ‘我是第N行’，例如：点击第一个li弹出 ‘我是第1行’…
*/
{
	//获取目标对象
	/*
		let box = document.getElementById('box');
		//console.log(box.nodeType);
		//oList=box.getElementsByTagName('li');
		let lis = box.getElementsByTagName('li');
		//console.log(lis[0].nodeName);
	*/
	let lis = document.querySelectorAll("#box>li");
	//console.log(lis[0].nodeName);

	//遍历目标元素，为每一项绑定事件
	for(let i = 0; i < lis.length; i++) {
		lis[i].onmouseover = function() {
			this.style.backgroundColor = 'green';
		}
		lis[i].onmouseout = function() {
			this.style.backgroundColor = 'yellow';
		}

		lis[i].onclick = function() {
			this.innerHTML = "我是第" + (i + 1) + "行";
		}
		//隔行变色
		if(i % 2 == 0) {
			lis[i].style.backgroundColor = "#e4393c";
		} else {
			lis[i].style.backgroundColor = "greey";
		}

	}

}