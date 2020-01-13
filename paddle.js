class Paddle{
	constructor(gamewidth,gameheight){
		this.width=80;
		this.height=10;
		this.speed=20;
		this.position={
			x:gamewidth/2-this.width/2,
			y:gameheight-this.height-10
		};

	}
	getpaddleposition(){
		return this.position;
	}
	draw(ctx){
		ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
	}
	controlspeed(speed){
		this.speed+=speed;
	}
	movement(){
		document.addEventListener("keydown",event =>{

		    if(event.keyCode==37 && this.position.x>-2){
		    	ctx.clearRect(this.position.x+1,this.position.y-1,this.width,this.height+2);
		    	paddle.position.x-=paddle.speed;
				paddle.draw(ctx);
		    }
		    else if(this.position.x<(800-this.width)){
		    	ctx.clearRect(this.position.x-1,this.position.y-1,this.width+1,this.height+2);
		    	paddle.position.x+=paddle.speed;
				paddle.draw(ctx);
		    }
		    else{
		    	paddle.draw(ctx);
		    }
		}
		);
	}
}