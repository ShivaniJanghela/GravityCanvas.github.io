// utility functions
function randomRange(min,max)
{
  return Math.floor(Math.random()*(max-min+1))+min;
}
function randomColor(colorArr)
{
     return colorArr[Math.floor(Math.random()*colorArr.length)];
}
//"addEventListener
window.addEventListener("click",function()
{
init();
})

window.addEventListener("resize",function(){
  canvas.width=this.innerWidth;
  canvas.height=this.innerHeight;
  init();
})

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let gravity=1;
let friction=0.99;
let colorArr=[
  "#2185C5",
  "#7ECEFD",
  "#FFF6ES",
  "#FF7F66",
  "#00ffff"
]
function Ball(x,y,r,dx,dy,color){
    this.x=x;
    this.y=y;
    this.r=r;
    this.dy=dy;
    this.dx=dx;
    this.color=color;
    this.draw=function()
    {
     ctx.beginPath();
     ctx.fillStyle=this.color;
     ctx.strokeStyle="black"
     ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
     ctx.fill();
     ctx.stroke();

    }
    this.update=function()
    {
        this.draw();
      if(this.y+r+this.dy>innerHeight)
      {
        this.dy=-this.dy*friction;
      }
      else
      {
        this.dy+=gravity;
      }
     
     if(this.x+this.r+this.dx>=innerWidth||this.x-this.r<=0)
     {
      this.dx=-this.dx;
     }
     this.x+=this.dx;
     this.y+=this.dy;
    }
}
let ballArr;
function init()
{
  ballArr=[];
for(let i=0;i<500;i++)
{   
    let r=randomRange(8,30);
    let x=randomRange(r,canvas.width-r);
    let y=randomRange(0,canvas.height-r);
    let color = randomColor(colorArr);
    let dy=randomRange(-2,2);
    let dx=randomRange(-2,2);
    ballArr.unshift(new Ball(x,y,r,dx,dy,color));



}

}

    
    window.requestAnimationFrame(main);
    init();
    function main()
    {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    for(i=0;i<ballArr.length;i++)
    {
    ballArr[i].update();
  
    }

    window.requestAnimationFrame(main);
    
    }



