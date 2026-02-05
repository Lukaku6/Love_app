export function init(){

  const holes=document.getElementById("holes");
  const scoreEl=document.getElementById("score");
  const timeEl=document.getElementById("time");
  const end=document.getElementById("end");

  let score=0;
  let time=30;

  for(let i=0;i<9;i++){
    const h=document.createElement("div");
    h.className="hole";
    holes.appendChild(h);
  }

  const spawn=()=>{
    const hole=holes.children[Math.floor(Math.random()*9)];

    const heart=document.createElement("div");
    heart.className="heart";
    heart.textContent="❤️";

    heart.onclick=()=>{
      score++;
      scoreEl.textContent=score;
      heart.remove();
    }

    hole.appendChild(heart);

    setTimeout(()=>heart.remove(),600);
  }

  const interval=setInterval(spawn,600);

  const timer=setInterval(()=>{
    time--;
    timeEl.textContent=time;

    if(time<=0){
      clearInterval(timer);
      clearInterval(interval);

      if(score>=15){
        end.textContent="¡Has ganado mi corazón ❤️!";
      }else{
        end.textContent="¡Casi! Inténtalo otra vez 😊";
      }
    }
  },1000);
}
