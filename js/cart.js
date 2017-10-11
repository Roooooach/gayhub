
$("document").ready(function(){
	$("#showhide").mouseenter(function(){
		$("#shop").stop().slideToggle("0.1s");
//		$("#jiantou").rotate({180});
	});
	$("#showhide").mouseleave(function(){
		$("#shop").stop().slideToggle("0.1s");
//		$("#jiantou").rotate({ 0});
	});
	qx_func();
//	calculate_quantity();
});

function qx_func(){
	var oAll=document.getElementsByClassName('select_all');
	var oThis=document.getElementsByClassName('select_this');
	var oBtn=document.getElementById('go');
	oAll[0].onclick=function(){
		if(this.checked==true){
			for(i=0;i<oThis.length;i++){
			oThis[i].checked=true;
			}
			oAll[1].checked=true;
		}
		else{
			for(i=0;i<oThis.length;i++){
			oThis[i].checked=false;
			}
			oAll[1].checked=false;
		}
		
	}
	oAll[1].onclick=function(){
		if(this.checked==true){
			for(i=0;i<oThis.length;i++){
			oThis[i].checked=true;
			}
			oAll[0].checked=true;
		}
		else{
			for(i=0;i<oThis.length;i++){
			oThis[i].checked=false;
			}
			oAll[0].checked=false;
		}
	}
	
	for(var i=0;i<oThis.length;i++){
		oThis[i].onclick=function(){
			if(this.checked){oBtn.style.backgroundColor='rgb(0,195,245)';}
			else{oBtn.style.backgroundColor='grey';}
			
			if(oThis[0].checked==true&&oThis[1].checked==true){
				oAll[0].checked=true; oAll[1].checked=true; 
			}
			else{
				oAll[0].checked=false; oAll[1].checked=false; 
			}
		}
	}
		
}

function cut(){
//	var oValue=document.getElementById('quantity1').value;
//	var oLbtn=document.getElementById('leftbtn');
//	oLbtn.onclick=function(){
//		if($("quantity").value>=1){
		
//			oValue=oValue-1;
//			oValue.innerHTML='oValue';
//			alert(oValue);
//			inputHTMLElement.value;
//		}
//	}
	var money=document.getElementById('money');
	var oMon1=document.getElementById('totalcount');
	var oMon2=document.getElementById('totalselected');
	var money2=document.getElementById('totalpay');
	var number = document.getElementById("quantity1");
        if (number.value<=1) {
            //如果文本框的值小于1,则设置值为1
            number.value = 1;
            alert('减你妹啊，不想买滚蛋')
//          var a=parseInt(number.value);
//          money.innerHTML= '0';
        }else {
            number.value = number.value - 1;
            var a=parseFloat(number.value);
            var b= 2699.00 * a;
            b=b.toFixed(2);
            money.innerText=b;
            money2.innerText=b;
            oMon1.innerHTML=a;
            oMon2.innerHTML=a;
        }
}
function number(){
    var number = document.getElementById("quantity1");
    var value = number.value;
    //如果文本值为空,设置为1
    number.onkeyup=function(){
    	var money=document.getElementById('money');
		var oMon1=document.getElementById('totalcount');
		var oMon2=document.getElementById('totalselected');
		var money2=document.getElementById('totalpay');
		var oChec=document.getElementById('quanxuan3');
        var a=parseFloat(number.value);
        var b= 2699.00 * a;
      	if (number.value>5) {
            number.value = 5;
            alert('吃屎啦买这么多');
       	}else {
            var a=parseFloat(number.value);
            var b= 2699.00 * a;
            b=b.toFixed(2);
            money.innerText=b;
            money2.innerText=b;
            oMon1.innerHTML=a;
            oMon2.innerHTML=a;
    	}
       
    }
    
    number.onkeydown=function(){
    	value='';
    	
    }
    if (value=="") {
    number.value = 1;
    }
    //如果文本值为非纯数字,设置为1
    //isNaN()是否为非法数字
    if (isNaN(value)) {
        number.value = 1;
    }
    //如果文本值小于0,设置为0
    if (parseInt(value)<=0) {
        number.value = 0;
    }
    function fn_n(){
       	if(value==''){value=1;}
    }
    var timer_num=setInterval(fn_n,2000);
}

function add(){
	var oMon1=document.getElementById('totalcount');
	var oMon2=document.getElementById('totalselected');
	var money2=document.getElementById('totalpay');
	var money=document.getElementById('money');
	var number=document.getElementById("quantity1");
	if(number.value<=4){
//		number.value = number.value + 1;
		number.value = parseInt(number.value)+1;
		var a=parseFloat(number.value);
		var b= 2699.00 * a;
		b=b.toFixed(2);
		money.innerHTML=b;
		money2.innerText=b;
		oMon1.innerHTML=a;
        oMon2.innerHTML=a;
	}else{
		alert('吃屎啦买这么多');
	}
}


//function shop_hover(){
//	var oLi=document.getElementById('showhide');
//	oLi.onmouseover=show_shop();
//	oLi.onmouseout=hide_shop();
//}
//function show_shop(){
//	var oUl=document.getElementById('shop');
//	oUl.className='display_block';
//}
//function hide_shop(){
//	var oUl=document.getElementById('shop');
//	oUl.className='display_none';
//}

function changeColor(){
	var oA1=document.getElementById('iconweibo');
	var oA2=document.getElementById('iconweixin');
	var oA3=document.getElementById('iconqzone');
	
	oA1.onmouseover=function(){
		this.style.color='red';
	}
}
