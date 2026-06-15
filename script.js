const texts = [
"Full Stack Developer",
"Future Pilot",
"Game Creator",
"Problem Solver"
];

let i = 0;

const typing = document.getElementById("typing");

setInterval(() => {
typing.textContent = texts[i];
i++;
if(i >= texts.length) i = 0;
},2000);

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const target =
+counter.dataset.target;

let count = 0;

const update = ()=>{

count += Math.ceil(target/100);

if(count >= target){

counter.innerText = target;
return;

}

counter.innerText = count;

requestAnimationFrame(update);

};

update();

});
