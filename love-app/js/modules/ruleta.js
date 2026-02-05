export function init(){

const testing = false; // <- pon true mientras pruebas
  const btn = document.getElementById("spinBtn");
  const ruleta = document.getElementById("ruleta");
  const result = document.getElementById("result");
  const premios = [
    "Cena 🍝",
    "Abrazo 🤗",
    "Beso 😘",
    "Masaje 💆‍♀️",
    "⭐ Especial"
  ];

  btn.onclick = () => {if(!testing){
  const last = localStorage.getItem("lastSpin");
  const week = 7*24*60*60*1000;
  if(last && Date.now()-last<week){
    result.textContent="Solo una vez por semana ❤️";
    return;
  }
}


    localStorage.setItem("lastSpin",Date.now());

    // Aseguramos que cada nuevo giro avance varias vueltas hacia adelante
    // en lugar de asignar un ángulo absoluto pequeño que provoque giros cortos.
    if (typeof btn._currentRotation !== 'number') btn._currentRotation = 0;
    const extra = 720 + Math.floor(Math.random() * 360); // al menos 2 vueltas + random
    const newRotation = btn._currentRotation + extra;
    ruleta.style.transform = `rotate(${newRotation}deg)`;
    btn._currentRotation = newRotation;

    // Calculamos qué premio cayó
    const sectorAngle = 360 / premios.length;
    const finalAngle = (360 - (newRotation % 360)) % 360;
    const index = Math.floor(finalAngle / sectorAngle) % premios.length;

    setTimeout(()=>{
      result.textContent = "Te ha tocado: " + premios[index];
    },4000);
  }
}
