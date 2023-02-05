let horas = document.querySelector(".horas")
let btn = document.querySelector("button");
let clock;
let count = 0
let hor = 25;
let min = 0

function process(){
   min--

   if( min <=0){
    hor--
    min = 59
   }

   if(min == 0){
    clearInterval(clock)
    min = 0
    
   }
   
   printr(min)
}

function printr(){
    horas.innerHTML = `${hor < 10 ? '0' + hor : hor}:${min < 10 ? '0' + min : min}`
}

btn.addEventListener('click', function(){
   count++

   if(count % 2 == 0){
    clearInterval(clock)
    count = 0
   }else{
    
    clock = setInterval(process, (2000 - 1000))
   }

})







