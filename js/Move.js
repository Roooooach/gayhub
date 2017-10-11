function startMove(obj,json,fnEnd){
	if(obj.timer){
		clearInterval(obj.timer);		
	}

				
	obj.timer=setInterval(function(){
		var bStop=true;		//假设所有值都到了
		
		for(var attr in json){
			var cur=0;
			if(attr=='opacity'){cur=parseFloat(getStyle(obj,attr))*100;}
			else{cur=parseInt(getStyle(obj,attr));}
			var speed=(json[attr]-cur)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
						
			if(cur!=json[attr]){bStop=false;}

			if(attr=='opacity'){
				obj.style.opacity=(cur+speed)/100;
			}
			else{obj.style[attr]=cur+speed+'px';}

		}
		if(bStop){
			clearInterval(obj.timer);
		
			if(fnEnd){fnEnd();}
		}
	},30);
}
function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj,false)[name];
	}
}