class Ball{
	constructor(gamewidth,gameheight){
		this.dx=1;
		this.dy=1;
		this.xdirection=1.5;
		this.ydirection=1;
		this.gamewidth=gamewidth;
		this.gameheight=gameheight;
		this.radius=10;
		this.color = 'rgb(' + getRndInteger(0, 255) + ',' + getRndInteger(0, 255) + ',' + getRndInteger(0, 255) +')';
		this.position={
			x:getRndInteger(2*this.radius,gamewidth-2*this.radius),
			y:getRndInteger(2*this.radius,gameheight-10*this.radius)
		};
	}
	draw(ctx,paddleposition){
		ctx.fillStyle=this.color;
		ctx.beginPath();
		ctx.arc(this.position.x,this.position.y,this.radius,0,2 * Math.PI,false);
		ctx.fill();
		return this.move(paddleposition);
	}
	checkcollision(paddleposition){
		if(this.position.y+this.radius==paddleposition.y){
			console.log(this.position,paddleposition);
			if(this.position.x>=paddleposition.x&&this.position.x<=paddleposition.x+80){
				this.ydirection=-1;
			}
		}
	}
	move(paddleposition){

		if(this.position.y-this.radius<=0){

			this.ydirection=1;
		}
		else if(this.position.y>=this.gameheight){
			 return 0;
			this.ydirection=-1;
		}
		if(this.position.x+this.radius>=this.gamewidth){
			this.xdirection=-1;
		}
		else if(this.position.x-this.radius<=0){
			this.xdirection=1;
		}
		this.checkcollision(paddleposition);
		this.position.y+=this.dy*this.ydirection;
		this.position.x+=this.dx*this.xdirection;
		return 1;
	}
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}