
// ==========================
// COPY IP
// ==========================

function copyIP(){

    navigator.clipboard.writeText(
        "simbchcold.c6t.ru"
    );


    const btn =
    document.querySelector("button");


    btn.innerHTML="СКОПИРОВАНО!";


    setTimeout(()=>{

        btn.innerHTML="📋 СКОПИРОВАТЬ IP";

    },2000);


}





// ==========================
// SERVER STATUS
// ==========================


async function updateServer(){


try{


const response =
await fetch(
"https://api.mcsrvstat.us/2/simbchcold.c6t.ru"
);



const data =
await response.json();




const players =
document.getElementById("players");



if(data.online){



players.innerHTML =

(data.players?.online || 0);



}


else{


players.innerHTML="0";


}



}

catch(e){


console.log(
"Server API error"
);


}


}




updateServer();


setInterval(

updateServer,

60000

);








// ==========================
// PARTICLES
// ==========================


const canvas =
document.getElementById(
"particles"
);



const ctx =
canvas.getContext(
"2d"
);



function resize(){


canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;


}



resize();


window.addEventListener(
"resize",
resize
);




let particles=[];




for(let i=0;i<120;i++){


particles.push({

x:
Math.random()*canvas.width,


y:
Math.random()*canvas.height,


size:
Math.random()*3,


speed:
Math.random()*0.6+0.2


});


}






function animateParticles(){



ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);




ctx.fillStyle=
"rgba(255,255,255,0.45)";





particles.forEach(p=>{


ctx.beginPath();


ctx.arc(

p.x,

p.y,

p.size,

0,

Math.PI*2

);



ctx.fill();




p.y-=p.speed;



if(p.y<0){


p.y=
canvas.height;


p.x=
Math.random()*canvas.width;


}



});



requestAnimationFrame(
animateParticles
);


}



animateParticles();








// ==========================
// SCROLL ANIMATION
// ==========================


const elements =
document.querySelectorAll(
".info,.features div,.achievement"
);



const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(

entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


}



}


);


},

{

threshold:0.2

}

);




elements.forEach(el=>{


observer.observe(el);


});