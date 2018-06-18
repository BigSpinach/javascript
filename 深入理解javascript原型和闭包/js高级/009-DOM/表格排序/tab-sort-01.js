var data = null;
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "tabs.json", false);
		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4 && xhr.status === 200) {
				var result = xhr.responseText;
				//				data = utils.toJSON(result);
				data = result;
				//				
			}
		}
		xhr.send(null);

		data = JSON.parse(data);
		//console.log(data);
		//		data  = JSON.parse(data);
		//		window.JSON.parse(data);

		function bind() {

			//1.获取要操作的表格
			//let tab = document.getElementsByName('bigS_tab');
			let tabs = document.getElementsByTagName("tbody");
			console.log(tabs[0]);

			//2.将data转换为数组对象
			let arr = [];
			arr = Array.prototype.slice.call(data);
			//console.log(arr);
			//3.将数组对象添加到表格里
			/*
			<tr>
				<td>钟赛</td>
				<td>18</td>
				<td>123456789000000</td>
				<td>战斗人员</td>
				<td>吃</td>
			</tr>
			*/
			let frg = document.createDocumentFragment();
			for(let i = 0; i < arr.length; i++) {
				let trs = document.createElement("tr");
				//console.log(trs);
				//console.log(arr[i]);
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
				/*
				let str = "<td>"+arr[i].name +"</td>"+
						  "<td>"+arr[i].age +"</td>"+
						  "<td>"+arr[i].sex +"</td>"+
						  "<td>"+arr[i].skill +"</td>"+
						  "<td>"+arr[i].hobby +"</td>";
				*/
				//trs.innerHTML=str;
				frg.appendChild(trs);

			}
			tabs[0].appendChild(frg);
			frg = null;
		}
		bind();
		
		//实现隔行变色的功能
		function changeColor(){
			//获取所有的tr
			let trs= document.getElementsByTagName("tr");
			//console.log(trs.length);
			
			for (let i=0;i<trs.length;i++) {
				if(i%2==0){
					trs[i].style.backgroundColor = "#009E38";
				}else{
					trs[i].style.backgroundColor = "skyblue";
				}
			}
			
		}
		changeColor();
		
		
		//实现按年龄排序
		function sortFromAge(){
			let trs= document.getElementsByTagName("tr");
			let tabs = document.getElementsByTagName("tbody");
			//1.把类数组转为数组
			let arr=[];
			arr = [].slice.call(trs);
			//console.log(arr);
			
			//2.对数组进行排序
			//初始化一个标记
			td_age[1].flag*=-1;
			
			
			arr.sort(function(a,b){
				//按年龄排序
				return (a.cells[1].innerHTML - b.cells[1].innerHTML)*td_age[1].flag;	
			});
			//console.log(arr);
			//console.log(arr[0]);
			
			
			//3.将排序后的数组添加到tbody中
			let frg = document.createDocumentFragment();
			
			for(let i = 0;i<arr.length;i++){
				frg.appendChild(arr[i]);
			}
			tabs[0].appendChild(frg);
			frg = null;
		}
		
		//触发条件是点击年龄的时候
		//获取年龄这个 td
		let td_age =document.querySelectorAll("thead>tr>th");
		//console.log(td_age[1]);
		
		td_age[1].flag = -1;
		td_age[1].onclick =function(){
			
			sortFromAge();
		}