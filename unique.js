const music = document.getElementById("bgMusic");
const btn = document.getElementById("playBtn");

btn.onclick = () => {
  music.play();
  btn.style.display = "none";
};

// Wind particles
const wind = document.querySelector(".wind");
for(let i=0;i<25;i++){
  const span=document.createElement("span");
  span.style.top=Math.random()*100+"%";
  span.style.animationDelay=Math.random()*6+"s";
  wind.appendChild(span);
}
