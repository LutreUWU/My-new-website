



const Site = [
  {
  title: "My 1st Website",
  description: 'Inspired by the Serie "Fate"',
  language: 'CSS and HTML',
  
  lack: 'A bit of Javascript',
  bonus: '⚠ No Responsive',
  descriptionTwo: "That's where everything started.",
  
  image: "../Image/VideoSite/Site1.gif",

}, 

{
  title: "My 2nd Website",
  description: 'Inspired by the Serie "NGNL"',
  language: 'CSS and HTML',
  
  lack: 'A bit of Javascript',
  bonus:'⚠ No Responsive',
  descriptionTwo: "A 2nd project just for training",
  
  image: "../Image/VideoSite/Site2.gif",
},

{
  title: "My 3nd Website",
  description: 'A website where you can create your own animelist',
  language: 'Javascript',
 
  lack: 'A bit of HTML and CSS',
  bonus: '',
  descriptionTwo: "The first time I try Javascript",
 
  image: "../Image/VideoSite/Site3.gif",
},

{
  title: "An unforgettable movie.",
  description: 'A website that explains the film "Weathering with You" (synopsis, characters...). ',
  language: 'Javascript, HTML and CSS',
 
  lack: 'A bit responsive',
  bonus: '',
  descriptionTwo: "The first time I feel improvement",
 
  image: "../Image/VideoSite/Site4.gif",
},

{
  title: "One of my best Anime !",
  description: 'A website that explains the world of Oshi no Ko (story, characters, topics ...) ',
  language: 'Javascript, HTML and CSS',
 
  lack: 'Responsive ✓',
  bonus: '',
  descriptionTwo: "This is the start of the Javascript arc",
 
  image: "../Image/VideoSite/Site5.gif",
},

{
  title: "The dream.",
  description: 'A website inspired by Asian tradition restaurant, one day it will be mine',
  language: 'Javascript, HTML and CSS',
 
  lack: 'Responsive ✓',
  bonus: 'The background is responsive with the Sun',
  descriptionTwo: "I'm proud of this",
 
  image: "../Image/VideoSite/Site6.gif",
},



]




const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ12345";
let interval = null;
let currentSiteIndex = 0; // Initialisez le compteur à 0 pour le premier site

ImageDiv = document.querySelector(".SiteVideo")
const siteContentDiv = document.querySelector(".textSite")


function afficherContenu() {
  const currentSite = Site[currentSiteIndex];
  ImageDiv.src = currentSite.image
  // Remplir le contenu de la div avec les propriétés de l'objet courant
  siteContentDiv.innerHTML = `
    <h3 id="Hacked0" data-value='${currentSite.title}'>${currentSite.title}</h3>
    <p  id="Hacked1" data-value='${currentSite.description}'>${currentSite.description}</p>
    <li id="Hacked2" data-value='${currentSite.language}'>${currentSite.language}</li>
    <li id="Hacked3" data-value='${currentSite.lack}'>${currentSite.lack}</li>
    <li id="Hacked4" data-value='${currentSite.bonus}'>${currentSite.bonus}</li>

    <p id="Hacked5" data-value="${currentSite.descriptionTwo}">${currentSite.descriptionTwo}</p>
  `;

  const elementsToHack = ["Hacked0", "Hacked1", "Hacked2", "Hacked3", "Hacked4", "Hacked5"];

  elementsToHack.forEach((element, index) => {
    setTimeout(() => {
      hacked(element);
    }, index * 10); 
  });

 
 

 
 
  
}

afficherContenu(); // Appel initial pour afficher le contenu

buttonLeft = document.querySelector(".buttonLeft")
buttonRight = document.querySelector(".buttonRight")

buttonRight.addEventListener("click", () => {
   
   currentSiteIndex = (currentSiteIndex + 1) % Site.length;
  

   
   afficherContenu(); 


});

buttonLeft.addEventListener("click", () => {
  if (currentSiteIndex == 0){
    return
  }

  currentSiteIndex = (currentSiteIndex - 1) % Site.length;
 

  afficherContenu(); 


});


function hacked (element){
  let iteration = 0;
  const text = document.getElementById(element)
 
 
  const interval = setInterval(() => {

  text.innerHTML = text.innerHTML
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          
          return text.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 31)]
      })
      .join("");
    
    if(iteration >= text.dataset.value.length){ 
      
      clearInterval(interval);
      iteration = 0;
      clearInterval(clickAuto)
      clickAuto = setInterval(clickButton, 10000);
    }
    
    if (text.dataset.value.length >= 30){
      iteration += 1
    } else if (text.dataset.value.length >= 20){
      iteration += 1/2 ;
    } else {
      iteration += 1/4 ;
    }
    
   
  }, 20);

  
}

function clickButton() {
  buttonRight.click();
}

clickAuto = setInterval(clickButton, 10000);


