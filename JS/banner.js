AlltextContentDiv = document.querySelectorAll(".textbanner")


const textContents = [
  ["My website", "by Davideuh", "Enjoy !"],
  ["Top Artists", "Spotify", "Top Musics", "Top Anime", ]
];


text = 0
text2 = 0


function changetext(){
  
  
AlltextContentDiv[0].classList.remove("transitionBannerText")
AlltextContentDiv[0].textContent = textContents[0][text]

 setTimeout(() => {
  AlltextContentDiv[0].classList.add("transitionBannerText");
}, 1);
 

 text++
 
 if (text == 1){
  setTimeout(changetext, 1500); 

 }  else if (text == 2){
  setTimeout(changetext, 2000); 

 } else {
  text = 0
  setTimeout(changetext, 1300); 

 }
 
}

function changetext2(){
  
  AlltextContentDiv[1].classList.remove("transitionBannerText")
  AlltextContentDiv[1].textContent = textContents[1][text2]

 setTimeout(() => {
  AlltextContentDiv[1].classList.add("transitionBannerText");
}, 1);
 

 text2++
 if (text2 == 1){
  setTimeout(changetext2, 1500); 

 }  else if (text2 == 2){
  setTimeout(changetext2, 1300); 

 } else if (text2 == 3){
  setTimeout(changetext2, 1400); 

 }else {
  text2 = 0
  setTimeout(changetext2, 1600); 

 }

}


changetext()
changetext2()



