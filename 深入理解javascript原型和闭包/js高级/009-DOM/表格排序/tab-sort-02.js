{
	//获取服务器端数据
	var data = null;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "tabs.json", false);
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4 && xhr.status === 200) {
			var result = xhr.responseText;
			data = result;
		}
	}
	xhr.send(null);
	
	//将服务器端获取得到的字符串转为对象
	data = JSON.parse(data);

	//要操作的元素
	let tHead = document.getElementsByTagName("thead");
	//console.log(tHead[0]);
	let ths = tHead[0].getElementsByClassName('sort_header');
	//console.log(ths);//th的集合对象
	let tbody = document.getElementsByTagName("tbody");
	//console.log(tbody[0]);
	let trs = tbody[0].getElementsByTagName('tr');
	
	//动态绑定数据的方法
	function bind(data) {
		//将data转换为数组对象
		let arr = [];
		arr = Array.prototype.slice.call(data);
		//console.log(arr);
		//将数组对象添加到表格里
		let frg = document.createDocumentFragment();
		for(let i = 0; i < arr.length; i++) {
			let trs = document.createElement("tr");
			let cur = arr[i];
			for(let key in cur) {
				let tds = document.createElement("td");
				if(key == "sex") {
					tds.innerHTML = cur[key] === 1 ? "男" : "女";
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
	bind(data);

	//实现隔行变色的功能
	function changeColor() {
		//获取tbody里所有的tr
		let trs = tbody[0].getElementsByTagName("tr");
		//console.log(trs.length);
		for(let i = 0; i < trs.length; i++) {
			if(i % 2 == 0) {
				trs[i].style.backgroundColor = "yellow";
			} else {
				trs[i].style.backgroundColor = "skyblue";
			}
		}
	};
	changeColor();

	//实现按年龄排序
	function sortFromAge() {
		//1.把类数组转为数组
		let arr = [];
		arr = [].slice.call(trs);
		//console.log(arr);
		
		//2.对数组进行排序
		//初始化一个标记
		ths[1].frag*=-1;
		arr.sort(function(a,b) {
			//按年龄排序
			//return (a.cells[1].innerHTML - b.cells[1].innerHTML);
			return (parseFloat(a.cells[1].innerHTML) - parseFloat(b.cells[1].innerHTML))*ths[1].frag;
		});
		console.log(arr);

		//3.将排序后的数组添加到tbody中
		let frg = document.createDocumentFragment();

		for(let i = 0; i < arr.length; i++) {
			frg.appendChild(arr[i]);
		}
		tbody[0].appendChild(frg);
		frg = null;
		
		changeColor();
	};

	//触发条件是点击年龄的时候
	//获取年龄这个 td
	//console.log(ths[1]);//<th class="sort_header">年龄</th>
	ths[1].frag=-1;
	ths[1].onclick = function() {
		sortFromAge();
	}
}