let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let paddle=new Paddle(800,600);
paddle.movement();
ctx.clearRect(0,0,800,600);
paddle.draw(ctx);
paddle.controlspeed(2);
ball =new Ball(800,600);
var myTimer,ispaused;
function draw(){


		if(!ispaused){
		ctx.clearRect(0,0,800,600);
		
		if(!ball.draw(ctx,paddle.getpaddleposition())){
			ctx.clearRect(0,0,800,600);
			clearInterval(myTimer);
		}
		paddle.draw(ctx);
	}
}

function quit(){
	ctx.clearRect(0,0,800,600);
	clearInterval(myTimer);
}

function start(){
	clearInterval(myTimer);
	myTimer=setInterval(draw,6);
	console.log(myTimer);
}
function pause(){
	if(ispaused){
		ispaused=false;
	}
	else{
		ispaused=true;
	}
}