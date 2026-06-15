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

if(star.y > canvas.height){

star.y = 0;
star.x = Math.random() * canvas.width;

}

});

requestAnimationFrame(animateStars);

}

animateStars();

window.addEventListener("resize",()=>{

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

});
