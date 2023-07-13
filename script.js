function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createStars(container, quantity){
  for(var i=0; i<quantity;i++){
    var star = document.createElement("div");
    star.className = "star";
  
    star.style.transform = 'translate(' + getRandomNumber(-45,45) + 'vw, ' + getRandomNumber(-40,40) + 'vh)'
    star.style.animationDelay = getRandomNumber(0,4) + 's'
    
    container.appendChild(star);
  }
}

function createLava(container, quantity){
  for(var i=0; i<quantity;i++){
    var lava = document.createElement("div");
    lava.className = "lava";
  
    lava.style.top = getRandomNumber(0,90) + 'vh'
    lava.style.left = getRandomNumber(0,100) + 'vw'
    lava.style.animationDelay = getRandomNumber(0,10) + 's'
    
    container.appendChild(lava);
  }
}

createStars(document.getElementById("star-container-page1"), 20)
createStars(document.getElementById("star-container-page2"), 15)
createStars(document.getElementById("star-container-lastpage"), 20)
//createLava(document.getElementById("lava-container-page5"), 20)
