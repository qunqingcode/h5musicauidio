function move (obj,attr,target,speed,callback) {
					
					//关闭上一个定时器
					//判断速度的正负
					//获取元素的目前位置
					var current =parseInt(getstyle(obj,attr))
					if(current>target){speed=-speed}
						clearInterval(obj.timer);
					//box1原来的值为box1.offsetLeft
						//或者用之前封装的getstyle函数
						//向执行对象添加timer属性，用来保存自己的定时器
				 	obj.timer =	setInterval(function () {
						var oldvalue=parseInt(getstyle(obj,attr))
						var newvalue=oldvalue+speed
						//判断newvalue是否大于某值
						//当向左判断newvalue是否小于target
						//当向右判断newvalue是否大于target
						if((speed>0&&newvalue>target)||(speed<0&&newvalue<target)){newvalue=target}
						obj.style[attr]=newvalue+"px";
					//当元素移动到大于某位置时候，使其停止执行动画	
					if(newvalue==target){clearInterval(obj.timer)
					callback&&callback();
					}
					},30)
					
				}
		