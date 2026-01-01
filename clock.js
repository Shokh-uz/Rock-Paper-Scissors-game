const patterns = {
  0:[1,1,1,1,0,1,1,0,1,1,0,1,1,1,1],
  1:[0,1,0,1,1,0,0,1,0,0,1,0,1,1,1],
  2:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1],
  3:[1,1,1,0,0,1,1,1,1,0,0,1,1,1,1],
  4:[1,0,1,1,0,1,1,1,1,0,0,1,0,0,1],
  5:[1,1,1,1,0,0,1,1,1,0,0,1,1,1,1],
  6:[1,1,1,1,0,0,1,1,1,1,0,1,1,1,1],
  7:[1,1,1,0,0,1,0,0,1,0,0,1,0,0,1],
  8:[1,1,1,1,0,1,1,1,1,1,0,1,1,1,1],
  9:[1,1,1,1,0,1,1,1,1,0,0,1,1,1,1],
};

const clockEl = document.getElementById("clock");

function createDigit() {
  const d = document.createElement("div");
  d.className = "digit";
  
  for (let i = 0; i < 15; i++) {
    const t = document.createElement("div");
    t.className = "tile";
    d.appendChild(t);
  }
  return d;
}

function createColon() {
  const c = document.createElement("div");
  c.className = "colon";
  c.textContent = ":";
  return c;
}

// Konteynerlar yaratish
const hoursContainer = document.createElement("div");
hoursContainer.className = "hours";

const minutesContainer = document.createElement("div");
minutesContainer.className = "minutes";

const digits = [
  createDigit(),
  createDigit(),
  createColon(),
  createDigit(),
  createDigit(),
];

// Soat va minutlarni to'g'ri joylash
hoursContainer.appendChild(digits[0]);
hoursContainer.appendChild(digits[1]);
hoursContainer.appendChild(digits[2]); // colon
minutesContainer.appendChild(digits[3]);
minutesContainer.appendChild(digits[4]);

clockEl.appendChild(hoursContainer);
clockEl.appendChild(minutesContainer);

// ASOSIY QISM - renderTime funksiyasi
function renderTime() {
  const time = new Date().toLocaleTimeString("en-GB", {
    timeZone: "Asia/Tashkent",
    hour: "2-digit",
    minute: "2-digit",
  }).replace(":", "");

  let di = 0;

  for (let i = 0; i < time.length; i++) {
    const num = time[i];
    const tiles = digits[di].querySelectorAll(".tile");

    patterns[num].forEach((v, idx) => {
      tiles[idx].classList.toggle("on", v === 1);
    });

    di += (i === 1) ? 2 : 1; // colon skip
  }
}

setInterval(renderTime, 1000);
renderTime();
// === SEA SOUND ===
const sea = document.getElementById("seaSound");

document.addEventListener("click", () => {
  sea.volume = 0.35;
  sea.play();
}, { once: true });
