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
	let ths = tHead[0].getElementsByClassName('cursor');
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
	function sortFromAge(n) {
		//alert("sortFromAge执行了");
		let self = this;
		//1.把类数组转为数组
		let arr = [];
		arr = [].slice.call(trs);
		//console.log(arr);

		//2.对数组进行排序
		//初始化一个标记
		//ths[1].frag*=-1;
		//self.frag *= -1;
		
		//点击当前列，需要让其他列的frag的值变为最初的初始值
		//遍历所有的th，判断当前的frag的值是不是 当前列
		for(let k=0;k<ths.length;k++){
			if(ths[k]!==self){
				ths[k].frag = -1;
			}
		}
		self.frag *= -1;
		arr.sort(function(a, b) {
			//排序
			let aCur = a.cells[n].innerHTML;
			let bCur = b.cells[n].innerHTML;
			let aNum=parseFloat(aCur);
			let bNum=parseFloat(bCur);
			
			//将aCur和bCur进行判断，如果是NaN,就返回localStorage的比较结果
								//否则就返回 相差的结果
			if(isNaN(aNum)||isNaN(bNum)){
				return (aCur.localeCompare(bCur))*self.frag;
			}else{
				return (aNum-bNum)*self.frag;
			}
			
			
			//return (a.cells[1].innerHTML - b.cells[1].innerHTML);
			//return(parseFloat(a.cells[n].innerHTML) - parseFloat(b.cells[n].innerHTML)) * self.frag;
		});
		//console.log(arr);

		//3.将排序后的数组添加到tbody中
		let frg = document.createDocumentFragment();

		for(let i = 0; i < arr.length; i++) {
			frg.appendChild(arr[i]);
		}
		tbody[0].appendChild(frg);
		frg = null;

		changeColor();
	};

	//触发条件是点ths中的每一项th的时候
	for(var i = 0; i < ths.length; i++) {
		var curTh = ths[i];
		//console.log(curTh);
		curTh.index = i;
		curTh.frag = -1;
		if(curTh.className === 'cursor') {
			curTh.onclick = function() {
				sortFromAge.call(this, this.index);
			}
		}
	}

}