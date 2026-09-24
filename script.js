// ====== ✏️ Edita aquí el contenido de la carta ======
const carta = {
  para: "给全世界最美的女孩：",
  parrafos: [
    "你好呀，亲爱的。我写这封信只有一个目的，就是让你露出一个小小的微笑 ☺️ ——那个特别好看、我最喜欢看到的微笑。",
    "其实你已经收到过我很多封信了。只是有时候我看到你很累、压力很大，我会很担心。所以我想了一个计划：也许它不能帮你解决所有问题，但只要能让你开心一点点，对我来说就足够了。我的想法是，如果哪天我看到你很累或者压力很大，我就准备很多很多封信，让你笑很多很多次 ☺️ 因为这些信存在的意义，就是让你开心。所以以后的日子里，我会写很多封 ☺️",
    "所以，如果这封信来到了你的手里，我希望你知道，这是你男朋友为了让你好受一点而想出来的小心意 ☺️",
    "最近的生活也许有点难，也许你会难过，会很累，或者脑子里总是想太多。但我想让你知道：你真的很棒 😊 你很聪明，也很漂亮。你有你的不安和烦恼，每一个我都知道，可即便如此，我只想告诉你：你是这个世界上最美的女孩，在我心里，你也是最聪明、最坚强的那一个。",
    "你有自己的梦想和目标。中国的教育是一流的，但压力也真的很大，这一点我明白。我爱上的那个女孩很好强，想做到最好，这很棒，我也会一直支持你。但我还是不想你迷失自己，不想你受伤——不只是身体上的，我不想看到你受苦。我知道这些还是会发生：你会有压力，会遇到各种事情，会有灰心的时候。可即使知道这些，我也想让你知道，对我来说你就是完美的女孩 ☺️ 不管什么事，你都可以依靠我。我不是什么英雄，但如果是为了我可爱的女朋友，我当然能解决任何问题。",
    "所以，去实现你的梦想吧，去做最好的自己。努力、学习、好好玩，但别忘了休息。别忘了，如果你不健康，这一切都没有意义。我觉得心理健康非常重要，身体健康也一样。想做到最好没有错，但这一次，作为你的男朋友，我要说：我不希望你压力大到让自己出问题。压力永远都会有，问题也永远都会有。世界不完美，人也不完美，有很好的人，也会有很坏的人。重要的是，别让坏人走进你的生活 💛",
    "我想让你知道，不管发生什么，我都会一直在你身边。作为你的男朋友，我会支持你、照顾你、爱你，如果可以的话，一直到永远。",
    "所以如果你遇到很多难题，请一定要告诉我 ☺️ 你难受的时候，我会给你很多鼓励和支持；你难过的时候，我会让你重新开心起来；你生气的时候，我会努力让你冷静下来；你开心的时候，我会为你的快乐而开心；你成功的时候，我会为你骄傲；你失败的时候，我会陪你重新站起来，直到成功。你生活的每一个方面，我都会在。等你到了那个年纪，别怀疑，我一定会去中国，或者去你在的任何一个国家，给你一个大大的拥抱，然后把你抱起来 😝",
    "所以我希望这个世界上最美的女孩知道，从现在开始，你再也不会是一个人了 😳 因为有一个人，他唯一想要的就是看到你幸福、开心。你的笑容很美，永远不要怀疑这一点，你的眼睛我也超级喜欢 💖",
    "所以，我漂亮的女孩，要多笑一笑 😳 别怀疑，在世界的另一边，有一个男孩想用他的全部来照顾你，你就是他的全世界。别忘了微笑，多和家人聊聊天，好好享受美好的时光，好好吃饭，记得穿暖和一点。",
    "你还年轻，亲爱的，每件事都有它的时候，我相信你一定会成就大事。事情不会总是按我们想的那样发展，生活本来就不完美，重要的是战胜心里的害怕 😳 一切都有它的时间，随着时间过去，一切都会慢慢平静下来，永远不要怀疑。我相信你，也会一直支持你。",
  ],
  firma: "我全心全意地爱你\nCarlos",
};

// ====== Flores ======
// x, bottom (%), altura del tallo (cqi), escala, retraso (s), hojas, fila de atrás
const flowers = [
  { x: 26, b: 30, h: 20, s: .42, d: .6,  leaves: 3, back: true },
  { x: 38, b: 33, h: 22, s: .40, d: 1.2, leaves: 3, back: true },
  { x: 51, b: 32, h: 23, s: .42, d: .9,  leaves: 3, back: true },
  { x: 64, b: 31, h: 22, s: .42, d: 1.5, leaves: 3, back: true },
  { x: 20, b: 12, h: 34, s: .62, d: .4,  leaves: 4 },
  { x: 28, b: 18, h: 28, s: .50, d: 1.0, leaves: 4 },
  { x: 48, b: 16, h: 32, s: .55, d: 1.4, leaves: 4 },
  { x: 61, b: 16, h: 28, s: .50, d: 1.8, leaves: 4 },
  { x: 40, b: 0,  h: 44, s: 1.05, d: .2, leaves: 3 },
  { x: 77, b: 0,  h: 52, s: .90,  d: .7, leaves: 5 },
];

function flowerHTML(f) {
  let leaves = "";
  for (let i = 0; i < f.leaves; i++) {
    const y = .12 + i * (.6 / f.leaves);
    const ld = (.2 + y * 1.2).toFixed(2);
    leaves += `<div class="leaf ${i % 2 ? "l" : "r"}" style="--y:${y};--ld:${ld}s"></div>`;
    leaves += `<div class="leaf ${i % 2 ? "r" : "l"}" style="--y:${y + .04};--ld:${ld}s"></div>`;
  }

  let petals = "";
  for (let i = 0; i < 5; i++) {               // el cerezo tiene 5 pétalos
    petals += `<div class="petal" style="--r:${i * 72}deg"></div>`;
  }

  const blades = [["r", 1.2, 4, 8], ["r", 2.5, 6, 11], ["l", 1.2, 4, 8], ["l", 2.5, 6, 11]]
    .map(([side, o, w, h]) =>
      `<div class="blade ${side}" style="--bw:${w}cqi;--bh:${h}cqi;${side === "r" ? "left" : "right"}:${o * f.s}cqi"></div>`)
    .join("");

  return `
    <div class="flower ${f.back ? "back" : ""}"
         style="--x:${f.x}%;--b:${f.b}%;--h:${f.h}cqi;--s:${f.s};--d:${f.d}s">
      ${blades}
      <div class="stem">
        <div class="leaves"><div class="anchor">${leaves}</div></div>
        <div class="head">${petals}<div class="core"></div></div>
      </div>
    </div>`;
}

const stage = document.getElementById("stage");
stage.insertAdjacentHTML("beforeend", flowers.map(flowerHTML).join(""));

const rand = (min, max) => min + Math.random() * (max - min);
let extras = "";
for (let i = 0; i < 14; i++) {
  extras += `<div class="spark" style="--x:${rand(10, 90)}%;--b:${rand(10, 55)}%;--t:${rand(5, 10)}s;--d:${-rand(0, 10)}s;--dx:${rand(-3, 3).toFixed(1)}cqi"></div>`;
}
for (let i = 0; i < 22; i++) {
  extras += `<div class="fall" style="--x:${rand(0, 100)}%;--sz:${rand(.8, 1.6).toFixed(2)}cqi;--t:${rand(7, 13)}s;--d:${-rand(0, 13)}s;--dx:${rand(-8, 8).toFixed(1)}cqi"></div>`;
}
stage.insertAdjacentHTML("beforeend", extras);

// ====== Carta ======
const envelope = document.getElementById("envelope");
const wrap = document.getElementById("letterWrap");
const closeBtn = document.getElementById("closeLetter");

document.getElementById("letterTo").textContent = carta.para;
document.getElementById("letterBody").innerHTML = carta.parrafos
  .map((p, i) => `<p style="--delay:${(0.4 + i * 0.35).toFixed(2)}s"></p>`).join("");
document.querySelectorAll("#letterBody p").forEach((p, i) => (p.textContent = carta.parrafos[i]));
const sign = document.getElementById("letterSign");
sign.textContent = carta.firma;
sign.style.setProperty("--delay", `${(0.4 + carta.parrafos.length * 0.35).toFixed(2)}s`);

function openLetter() {
  envelope.classList.add("open");
  setTimeout(() => {
    wrap.querySelector(".letter").scrollTop = 0;
    wrap.classList.add("show");
    wrap.setAttribute("aria-hidden", "false");
    closeBtn.focus({ preventScroll: true });
  }, 650);
}
function closeLetter() {
  wrap.classList.remove("show");
  wrap.setAttribute("aria-hidden", "true");
  setTimeout(() => envelope.classList.remove("open"), 400);
  envelope.focus();
}

envelope.addEventListener("click", openLetter);
closeBtn.addEventListener("click", closeLetter);
wrap.addEventListener("click", (e) => { if (e.target === wrap) closeLetter(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && wrap.classList.contains("show")) closeLetter(); });
