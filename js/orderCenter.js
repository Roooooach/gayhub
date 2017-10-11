var a_mzp=document.getElementById('a-meizuphone');
var a_mlp=document.getElementById('a-meilanphone');
var a_mzs=document.getElementById('a-meizusound');
var a_mze=document.getElementById('a-meizuequiment');
var a_search=document.getElementById('search');
var f_search=document.getElementById('search_frame');
var nav_ul=document.getElementById('nav_ul');
var ul_meizuphone=document.getElementById('meizuphone');
var ul_meilanphone=document.getElementById('meilanphone');
var ul_meizusound=document.getElementById('meizusound');
var ul_meizuequipment=document.getElementById('meizuequipment');
var div_ul=document.getElementById('contain-products');
var aUl=div_ul.getElementsByTagName('ul');
var timer=null;
a_toBlue();


getPosition(ul_meizuphone);
getPosition(ul_meilanphone);
getPosition(ul_meizusound);
getPosition(ul_meizuequipment);

a_mzp.onmouseover=function(){
	clearTimeout(timer);
	slideDown(ul_meizuphone);
	products_show(ul_meizuphone);
	change_opacity(ul_meizuphone);
}
a_mzp.onmouseout=function(){
	clearTimeout(timer);
	timer=setTimeout(function(){
		startMove(div_ul,{height:0});
	},500);
}
a_mlp.onmouseover=function(){
	clearTimeout(timer);
	slideDown(ul_meilanphone);
	products_show(ul_meilanphone);
	change_opacity(ul_meilanphone);
}
a_mlp.onmouseout=function(){
	clearTimeout(timer);
	timer=setTimeout(function(){
		startMove(div_ul,{height:0});
	},500);
}
a_mzs.onmouseover=function(){
	clearTimeout(timer);
	slideDown(ul_meizusound);
	products_show(ul_meizusound);
	change_opacity(ul_meizusound);
}
a_mzs.onmouseout=function(){
	clearTimeout(timer);
	timer=setTimeout(function(){
		startMove(div_ul,{height:0});
	},500);
}
a_mze.onmouseover=function(){
	clearTimeout(timer);
	slideDown(ul_meizuequipment);
	products_show(ul_meizuequipment);
	change_opacity(ul_meizuequipment);
}
a_mze.onmouseout=function(){
	timer=setTimeout(function(){
		startMove(div_ul,{height:0});
	},500);
}
function slideDown(ul){
	clearTimeout(timer);
	startMove(div_ul,{height:157});
	for(var i=0;i<aUl.length;i++){
			aUl[i].style.display='none';
	}
	ul.style.display='block';
}

function products_show(ul){
	var aLi=ul.getElementsByTagName('li');
	var arr=[];
	for(var i=0;i<aLi.length;i++){
		arr[i]=i*148;
		console.log(arr[i]);
//		aLi[i].style.left=arr[i]+30+'px';
		aLi[i].style.left=arr[i]+30*(i+1)+'px';
		aLi[i].style.opacity=0;
	}
//	var i=0;
//	startMove(aLi[i],{left:arr[i],opacity:100},fnEnd);
//	function fnEnd(){
//		i++;
//		if(aLi[i]){
//			startMove(aLi[i],{left:arr[i],opacity:100},fnEnd);
//		}
//	}
	//并非一个一个轮流运动,而应该是同时运动,在将li右移时,每个第n个li的left值应比前一个li多一定数值,opacity同理
	for(var i=0;i<aLi.length;i++){
		startMove(aLi[i],{left:arr[i],opacity:100});
	}
}
function change_opacity(ul){
	var aLi=ul.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseenter=function(){
			for(var j=0;j<aLi.length;j++){
				startMove(aLi[j],{opacity:30});
			}
			startMove(this,{opacity:100});
		}
	}
}






div_ul.onmouseover=function(){
	console.log('gg');
	clearTimeout(timer);
	clearTimeout(timer);
	div_ul.style.height=147;
}
div_ul.onmouseout=function(){
	clearTimeout(timer);
	timer=setTimeout(function(){
		startMove(div_ul,{height:0});
	},500);
}

a_search.onmouseover=function(){
	f_search.style.display='block';
	startMove(f_search,{width:170,left:-150});
	startMove(nav_ul,{left:200});
	f_search.focus();
}
a_search.onmouseleave=fn_mouseleave;
f_search.onmouseover=function(){
	clearInterval(timer);
//	console.log('gg');
	f_search.style.display='block';
	f_search.style.width=170;
	f_search.style.left=-150;
	nav_ul.style.left=200;
}
f_search.onmouseleave=fn_mouseleave;

function fn_mouseleave(){
	timer=setTimeout(function(){
		startMove(f_search,{width:20,left:0});
		startMove(nav_ul,{left:350});
		f_search.style.display='none';
	},300);
}


function a_toBlue(){
	var oDiv_tab=document.getElementById('tab-btn');
	var aA=oDiv_tab.getElementsByTagName('a');
	for(var i=0;i<aA.length;i++){
		aA[i].onmouseover=function(){
			for(var j=0;j<aA.length;j++){
				aA[j].className='order-btn';
			}
			this.className='order-btn btn-active';
		}
	}
}


function animate_meizu(obj){
	
}

function getPosition(ul){
	var aLi=ul.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++){
//		aLi[i].index=i;
		aLi[i].style.left=i*148+'px';
	}
}
