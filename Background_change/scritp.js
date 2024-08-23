//creating a random color
const randomColor= function(){
    let hex="0123456789ABCDEF";
    let color='#';
    for(let i=0;i<6;i++){
        color +=hex[Math.floor(Math.random()*16)];
      
    }
    return color
};
console.log(randomColor())

let interval;
const startColor=function(){
    
        if(!interval){
            interval=setInterval(coloring,1000);

        }
        function coloring(){
            
            document.body.style.backgroundColor = randomColor();
              
        }

     
}

const stopColor=function(){
    clearInterval(interval)
    interval=null;
    
}


document.querySelector('#start').addEventListener('click',startColor);
document.querySelector('#stop').addEventListener('click',stopColor);


