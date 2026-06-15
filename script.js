const loader = document.getElementById("loader");

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

}, 600);

}, 2800);

});

const words = [

"Game Developer",
"Roblox Creator",
"Future Pilot",
"Full Stack Developer",
"Problem Solver"

];

let index = 0;

const typing = document.getElementById("typing");

function changeText() {

typing.style.opacity = 0;

setTimeout(() => {

typing.textContent = words[index];

typing.style.opacity = 1;

index++;

if(index >= words.length){

index = 0;

}

}, 400);

}

changeText();

setInterval(changeText, 2500);

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const target = Number(counter.dataset.target);

let current = 0;

const updateCounter = () => {

const increment = Math.ceil(target / 100);

current += increment;

if(current > target){

current = target;

}

counter.textContent = current;

if(current < target){

requestAnimationFrame(updateCounter);

}

};

updateCounter();

});

document.querySelectorAll(".project-card").forEach(card => {

card.addEventListener("mousemove", e => {

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateY = ((x / rect.width) - 0.5) * 20;

const rotateX = ((y / rect.height) - 0.5) * -20;

card.style.transform = `perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave", () => {

card.style.transform = "";

});

});

const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

for(let i = 0; i < 250; i++){

stars.push({

x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
size: Math.random() * 2,
speed: Math.random() * 0.5 + 0.1

});

}

function animateStars(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "white";

stars.forEach(star=>{

ctx.beginPath();

ctx.arc(
star.x,
star.y,
star.size,
0,
Math.PI*2
);

ctx.fill();

star.y += star.speed;

if(star.y > canvas.height){#loader{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:radial-gradient(circle at center,#101a4a,#050816 70%);
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
z-index:9999;
transition:opacity .8s;
}

#loader::before{
content:"";
position:absolute;
width:10px;
height:10px;
border-radius:50%;
background:white;

box-shadow:
0 0 20px white,
0 0 40px #00d4ff,
0 0 80px #00d4ff,
0 0 160px #8f5cff;

animation:wormhole 2.8s ease-in-out infinite;
}

.loader-logo{
position:relative;
font-size:5rem;
font-family:'Orbitron',sans-serif;
font-weight:900;
letter-spacing:8px;

background:linear-gradient(
90deg,
#00d4ff,
#8f5cff,
#ff00d4
);

-webkit-background-clip:text;
-webkit-text-fill-color:transparent;

animation:logoWarp 2.5s ease forwards;

text-shadow:
0 0 20px rgba(0,212,255,.6),
0 0 60px rgba(143,92,255,.5);
}

@keyframes logoWarp{

0%{
transform:scale(1);
opacity:1;
filter:blur(0);
}

60%{
transform:scale(2);
opacity:1;
}

100%{
transform:scale(25);
opacity:0;
filter:blur(20px);
}

}

@keyframes wormhole{

0%{
transform:scale(.5);
opacity:.3;
}

50%{
transform:scale(15);
opacity:1;
}

100%{
transform:scale(30);
opacity:0;
}

}
