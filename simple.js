let canvas = document.getElementById("canvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth
let context = canvas.getContext('2d')

/*
function Wave(x,y,amplitude,frequency,pitch){
this.x =x;
this.y =y;
this.amplitude =amplitude;
this.frequency = frequency;
this.pitch = pitch;



}
*/

let dx =0;
//let pitch = 0;
let amplitude = 100;
let y = 350;

let frequency =0;
let color = ['green','red','blue','purple','pink','Yellow','green','grey']
function animation(){
    context.fillStyle='rgba(0,0,0,0.01)';
    
    context.fillRect(0, 0, innerWidth, innerHeight);
    //context.clearRect(0,0,innerWidth,innerHeight);
    requestAnimationFrame(animation)
    
    context.beginPath();
    context.moveTo(0,y);
    let pitch = 0;
    for(let i=0;i<innerWidth;++i){
        context.lineTo(i,y+Math.sin(pitch+frequency)*amplitude*Math.sin(frequency));
        // here Math.sin(frequency) is use for dynamic wavelenght not use random() it is fluctuate more
        context.lineWidth=1;
                
        pitch+=0.01
    }
    
    frequency+=0.01
    context.strokeStyle = 'hsl(186,34%,50%)'
    
    context.stroke();

}animation()

