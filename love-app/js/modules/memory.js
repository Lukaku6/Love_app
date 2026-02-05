export function init(){

  const fotos = [
    "foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg","foto5.jpg",
    "foto6.jpg","foto7.jpg","foto8.jpg","foto9.jpg","foto10.jpg"
  ];

  const cartas = [...fotos, ...fotos]
    .sort(()=>Math.random()-0.5);

  const grid = document.getElementById("memoryGrid");
  grid.style.gridTemplateColumns = "repeat(5,70px)";

  let first=null, lock=false, matches=0;

  cartas.forEach(src=>{
    const card=document.createElement("div");
    card.className="card";
    card.textContent="❤️";

    card.onclick=()=>{
      if(lock || card.dataset.open) return;

      card.innerHTML=`<img src="assets/fotos/${src}">`;
      card.dataset.open=1;

      if(!first){
        first={card,src};
      }else{
        if(first.src===src){
          matches++;
          if(matches===10){
            document.getElementById("memoryMsg").textContent="¡Ganaste! ❤️";
          }
          first=null;
        }else{
          lock=true;
          setTimeout(()=>{
            card.textContent="❤️";
            first.card.textContent="❤️";
            card.dataset.open="";
            first.card.dataset.open="";
            first=null;
            lock=false;
          },700);
        }
      }
    }

    grid.appendChild(card);
  });
}
