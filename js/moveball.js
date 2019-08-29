			$(function () {
			var canvas=	$("#myCanvas")[0]
			var x=100;
			var colorarry=[
			"red",
			"blue",
			"yellow",
			"green",
			"skyblue"
			]
			var mouse={
				x: null,
				y:null
			}
			var index
			$("#movball").on("mousemove",function (event) {
				mouse.x=event.offsetX;
				mouse.y=event.offsetY;
			})
			$("#movball").on("mouseout",function (event) {
				mouse.x=event.offsetX+999;
				mouse.y=event.offsetY+999;
			})
			window.addEventListener("resize",function () {
			canvas.width=$("#movball").width()
			canvas.height=$("#movball").height()
			init()
			})
			canvas.width=$("#movball").width()
			canvas.height=$("#movball").height()
			//创建绘制上下文
			var ctx=canvas.getContext("2d")
			function Ball (x,y,dx,dy,radios,color) {
				this.x=x;
				this.y=y;
				this.dx=dx;
				this.dy=dy;
				this.radios=radios;
				this.minradios=radios;
				this.color=color
				this.draw=function () {
				//新起路径 ---换个地方重新下笔
				ctx.beginPath()
				ctx.arc(this.x,this.y,this.radios,0,2*Math.PI,false)
		    	ctx.fillStyle=this.color
			    ctx.fill()
				//关闭路径
				ctx.closePath();
				}
				this.updata=function () {
					//检测边界
					if(this.x+this.radios>canvas.width||(this.x-this.radios)<0){
						this.dx=-this.dx//边界时，速度取反
					}
					if(this.y+this.radios>canvas.height||(this.y-this.radios)<0){
						this.dy=-this.dy//边界时，速度取反
					}
					this.x +=this.dx;
					this.y +=this.dy
					//鼠标交互
					if(mouse.x-this.x<50&&mouse.x-this.x>-50&&mouse.y-this.y<50&&mouse.y-this.y>-50){
						if(this.radios<50){
							this.radios+=1
						}
						}else {
							if(this.radios>this.minradios){
							this.radios -=1
						}
						}
						this.draw()
					}
					
				}
			
		
			var ballAarry;
			//初始化
			function init () {
				 ballAarry=[];
			for (var i=0;i<100;i++){
				var radios=Math.random()*10+1;
				var x=Math.random()*(canvas.width-2*radios)+radios
				var y=Math.random()*(canvas.height-2*radios)+radios
				var dx=(Math.random()-0.5)*2
				var dy=(Math.random()-0.5)*2
				var color=colorarry[Math.floor(Math.floor(Math.random()*4))]
				ballAarry.push(new Ball (x,y,dx,dy,radios,color))	;
			}
			}
			
				//动画
			function anima(){
				anitimer =requestAnimationFrame(anima);
				//清除绘制
				ctx.clearRect(0,0,canvas.width,canvas.height)
				
				for( var b of ballAarry){
					b.updata()
				}
				
			}
			var anitimer;
			$(".play,.next,.pre").click(function () {
				window.cancelAnimationFrame(anitimer);
				init()
				anima()
			})
			$(".pause").click(function () {
				window.cancelAnimationFrame(anitimer);
			})
			})
