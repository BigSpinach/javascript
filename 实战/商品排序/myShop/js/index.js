"use strict";
let listBox = document.getElementsByClassName('main-products-list');
//alert(listBox[0]);
 let   headerBox = document.getElementsByClassName('main-array');
  let  linkList = headerBox[0].getElementsByTagName('ul>li>a');
  let  productList = listBox[0].getElementsByTagName('li');
//=>一、获取数据,然后动态展示在页面中
~function () {
    //->获取数据
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'json/product.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = xhr.responseText;//=>JSON格式的字符串
            window.result = utils.toJSON(result);
        }
    };
    xhr.send(null);

    //->数据绑定:ES6中的模板字符串(原理:传统的字符串拼接)
    
//  init:function(){
//  	
//  }
//  var listBox = document.getElementById('list');
let listBox = document.getElementsByClassName('main-products-list');
    var str = ``;//=>这不是单引号而是撇
    for (var i = 0; i < result.length; i++) {
        var item = result[i];
        str +=`<li>
        	<a href="javascript:;">
				<img src="${item.img}" alt="">
				<p><span class="item-price">￥${item.price}</span ><span class='saler rt'>${item.saler}人付款</span> </p>
				<p class="shop-title">${item.title}</p>
				<div>
					<span class="dsrs">
						<span class="dsr morethan"></span>
	           			<span class="dsr morethan"></span>
						<span class="dsr morethan"></span>
	           		</span>								
					<span class="shop-name">${item.shopname}</span>
				</div>						
			</a>
		</li>`
    };
    listBox[0].innerHTML = str;
}();
/*
(function(){//综合排序
	//linkList[0]
	linkList[0].onclick=function(){
		//当点击的时候，刷新页面为初始化页面
	}
	
})();

(function(){//人气排序
	linkList[1].onclick=function(){
		//当点击的时候，刷新页面为按人气高低排序--hot
		
	}
})();

(function(){//销量格排序
	linkList[2].onclick=function(){
		
	}
})();

(function(){//按信用排序
	linkList[3].onclick=function(){
		
	}
})();
(function(){//按价格排序
	linkList[4].onclick=function(){
		
	}
})();*/