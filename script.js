let imageSec1 = document.getElementById("section1");
let imageSec2 = document.getElementById("section2");
let imageSec3 = document.getElementById("image-2");
let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");


yesBtn.addEventListener('click',function(){
    imageSec1.style = 'background:red'
    imageSec2.style = 'background:red'
    imageSec3.style = 'background:red'
    noBtn.style = 'right:50px; bottom:50px'
})


noBtn.addEventListener('click',function(){
    let randomNumber1 = Math.ceil(Math.random()*280)
    let randomNumber2 = Math.ceil(Math.random()*320)
    imageSec1.style = 'background:#fff'
    imageSec2.style = 'background:#fff'
    imageSec3.style = 'background:#fff'
    noBtn.style = `top:${randomNumber1}px; right:${randomNumber2}px`
})