var sun = document.querySelector('#sun');
var img = document.querySelector('.img');
var blur = document.querySelector('.blur');
var skill = document.querySelector("#skill")
var yash = document.querySelector('#yash');
var para = document.querySelector("#para")
var h1 = document.querySelector('#h1')
var crsr = document.querySelector('.cursor');
var cnct = document.querySelector('#cnct');

sun.addEventListener('click', function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        sun.src = "sun.png";
        h1.style.color = "white"
        skill.style.color = "white"
        para.style.color = "white"
        cnct.style.color = "white"
    }else{
        sun.src = "moon.png";
        h1.style.color = "black"
        skill.style.color = "black"
        para.style.color = "black"
        cnct.style.color = "black"
    }
})

document.addEventListener('mousemove', function(e){
    crsr.style.left = e.x + "px"
    crsr.style.top = e.y + "px"
})

