{
	let data = null;
	//通过ajax获取服务器端数据
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'tabs.json', false);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			let result = xhr.responseText;
			data = result;
		}
	}
	//data转为json格式的对象
	xhr.send(null);

	data = JSON.parse(data);
	//console.log(data);

	//获取要操作的节点
	let tbody = document.getElementsByTagName('tbody');
	let thead = document.getElementsByTagName('thead');
	let ths = thead[0].getElementsByTagName("th");
	let trs = tbody[0].getElementsByTagName("tr");

	//获取完服务器端数据，然后就是将服务器端数据动态绑定到页面
	function bind() {
		//将data的集合转为数字
		let arr = [];
		arr = [].slice.call(data);
		let frg = document.createDocumentFragment();
		for(let i = 0; i < arr.length; i++) {
			let trs = document.createElement('tr');
			let cur = arr[i];
			for(let key in cur) {
				let tds = document.createElement('td');
				//遍历arr的每一个属性值，并将其添加至td中
				if(key == "sex") {
					tds.innerHTML = cur[key] == "1" ? "男" : "女";
				} else {
					tds.innerHTML = cur[key];
				}

				trs.appendChild(tds);
			}
			frg.appendChild(trs);
		}

		tbody[0].appendChild(frg);
		frg = null;
	}
	bind();

	//隔行变色功能
	function changeBg() {
		//获取所有的行---trs
		for(let i = 0; i < trs.length; i++) {
			if(i % 2 == 0) {
				trs[i].style.backgroundColor = "sandybrown";
			} else {
				trs[i].style.backgroundColor = "yellow";
			}
		}
	}
	changeBg();

	//排序功能
	function changeSort(n) {
		//alert("sortFromAge执行了");
		//n表示按照第几行的内容排序
		//1.获取所有的trs 的集合对象
		//2.将集合对象转为数组
		//3.对数组进行排序
		//4.将排序后的数组重新绑定到页面
		let _this = this;
		let arr = [];
		arr = [].slice.call(trs);
		
		//点击当前列，需要让其他列的frag的值变为最初的初始值
		//遍历所有的th，判断当前的frag的值是不是 当前列
		
		 _this.frag *= -1;
		
		arr.sort(function(a,b) {
			
			//return(parseFloat(a.cells[1].innerHTML) - parseFloat(b.cells[1].innerHTML))*_this.frag;
			let aStr = a.cells[n].innerHTML;
			let bStr = b.cells[n].innerHTML;
			let aNum =parseFloat(aStr);
			let bNum =parseFloat(bStr);
			if(isNaN(aNum)||isNaN(bNum)){
				return (aStr.localeCompare(bStr))*_this.frag;
			}else{
				return (aNum-bNum)*_this.frag;
			}
			
		});

		let frg = document.createDocumentFragment();
		for(let i = 0; i < arr.length; i++) {
			frg.appendChild(arr[i]);
		}
		tbody[0].appendChild(frg);
		frg = null;

		changeBg();
	}

	//触发
	for(let i = 0; i < ths.length; i++) {
		let cur = ths[i];
		console.log(cur);
		cur.index = i; //标记--记录排序的依据
		cur.frag = -1; //标记--实现自由切换
		if(cur.className === "cursor") {
			cur.onclick = function() {
				changeSort.call(this, this.index);
			}
		}
	}

}