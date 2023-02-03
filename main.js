let horas = document.querySelector(".horas")
let btn = document.querySelector("button");
let container = document.querySelector('.container')
let count = 0;
let isPause = false
let alarme = new Audio()
let clock;

hh = 24;
min = 59;
function start () { 
   clock = setInterval(process, 1000)  
   music('ES_Pen Click Out - SFX Producer.mp3')
   alarme.play()
}

function process(){
   
    if( clock % 2 == 0){ 
        clearInterval(clock)   
    }
    else{     
  
       min--
       if( min == 00){
    
            hh--
            min = 59
       }
      
    }
   
    print(hh,min)
    
}

function print (hours, minutes) {
    horas.innerHTML = `${(hours < 10 ? '0' + hours : hours)}:${(minutes < 10 ? '0' + minutes : minutes)}`; 
}

function pause (relogio) {
    console.log(relogio)
}


function music (url) {
    alarme.src = url;
}



