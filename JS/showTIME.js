button = document.querySelector(".showTime")
site = document.querySelector(".container")
BGSite = document.querySelector(".bg")
outShadow = document.querySelector(".ContentDiv")
allDiv = document.querySelectorAll(".show")


music = new Audio("./show.mp3")
let intervalId = null
leftLight = document.querySelector(".leftLightDiv")
rightLight = document.querySelector(".rightLightDiv")



const moments = [
  { time: 0},
  { time: 10.9},
  { time: 13},
  { time: 23},
  { time: 25.5},
  { time: 28},
  { time: 32},

  { time: 46},

  { time: 67},
  { time: 75},
  { time: 77},
  
];

 Cards = document.querySelectorAll(".characterCardDiv")
 CardsArray = Array.from(Cards);

button.addEventListener("click", function(){
  music.play()
})

loop1 = false
loop2 = false
loop3 = false
loop4 = false
loop5 = false
music.addEventListener('timeupdate', function(){
  AllSparkle = document.querySelectorAll(".Sparkle")    

       const currentTime = music.currentTime;
          for (const moment of moments) {
            
            if ( (currentTime >= 32) && (currentTime<= 46)) {
              if (loop1 == false){ 
                loop1 = true
                intervalId = setInterval(function() {ColorEffect()}, 1500);                   
              } 
              break; 
            }
           
            if ( (currentTime >= 76)) { 
              if (loop2 == false){ 
                loop2 = true
                intervalId = setInterval(function() {ColorEffect()}, 1500);          
              } 
              break;   
            } 

            if (currentTime >= moment.time && currentTime <= moment.time + 0.3 && currentTime <= 100) {
                            
                  ColorEffect()                
                             
            }
              
                          
}
          
          if (currentTime >= 15){
            if (loop3 == false){
              loop3 = true
              Card()
            }
            
          }

          if (currentTime >= 22 ){
            leftLight.style.width = "450px"
            leftLight.style.height = "100px"

            rightLight.style.width = "450px"
            rightLight.style.height = "100px"

            BGSite.src = ["../BG/BG2.jpg",];
            AllSparkle.forEach(element => {
            element.src = ["../BG/pixelstar2.gif",];
            
            }); 

            if (loop5 == false){
              loop5 = true
              fireworks()
            }
            
          }

          if (currentTime >= 44){
            if (loop4 == false){
              loop4 = true
              clearInterval(intervalId)
              intervalId = null
             
            }
            
          }
          if (currentTime >= 100){
            AllSparkle = document.querySelectorAll(".Sparkle")    

            clearInterval(intervalId)
            intervalId = null

            BGSite.src = ["../BG/BG.jpg",];
            AllSparkle.forEach(element => {
              element.src = ["../BG/pixelstar.gif",];
             
            });

            
          }

          if (currentTime >= 117){
            leftLight.style.width = "0px"
            leftLight.style.height = "0px"

            rightLight.style.width = "0px"
            rightLight.style.height = "0px"

           
          }
          
          })
         music.addEventListener('ended', function(){
            loop1 = false
            loop2 = false
            loop3 = false
            loop4 = false
            loop5 = false

            Cards = document.querySelectorAll(".characterCardDiv")
            Cards.forEach(element => {
            element.removeAttribute('style')
            element.style.opacity = 0
            element.style.transition = "opacity 1s"
            })
            CardsArray = Array.from(Cards);


         })
function ColorEffect(){
  site.classList.add("shadow")
  outShadow.classList.add("outshadow")
  allDiv.forEach(element => {
    element.classList.add("color")
  });

  setTimeout(function() {
    site.classList.remove("shadow")
    outShadow.classList.remove("outshadow")

    allDiv.forEach(element => {
      element.classList.remove("color")
    });

   
  }, 1400);

  

}
var i = 0; 
const Side = ["left", "right"]; 

function Card(){
  
    setTimeout(function() {      
       randomNumber = Math.random();
       randomValue = Math.floor(Math.random())
       WhichSide = Side[Math.floor(Math.random() * Side.length)];
     
       delayValue = (35 + i * 2)
       console.log(delayValue)
       SideValue = 2 + Math.floor(Math.random() * 15)
       WhichCard =  Math.floor(randomNumber * CardsArray.length)
       CardShow = CardsArray[WhichCard]; 
       console.log(CardShow)
        CardsArray.splice(WhichCard, 1);
        console.log(CardsArray)
      CardShow.style.opacity = 1
      CardShow.style.top =  "110%" 
      CardShow.style.transition = "top " + delayValue + "s linear"
      CardShow.style[WhichSide]  = SideValue + `%`;  
      
      i++; 
      if (i < 14  ) {      
        Card()           
      } else {
        i = 0
      }
      
      
    }, 7000)
  
}





function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function fireworks(){
  var duration = 94000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 150, zIndex: 0 };
var intervalFire = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(intervalFire);
  }

  var particleCount = 40 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 500);
}

