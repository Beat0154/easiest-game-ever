var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList == "animatech"){return}
    character.classList.add("animatech");
    setTimeout(function(){
        character.classList.remove("animatech");
    },300);
}
function sta(i){
document.getElementById(i).innerHTML="Jump";
 if(block.classList == "animateb"){return}block.classList.add("animateb");
var checkDead=setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        //alert("Game Over. score: "+Math.floor(counter/100));
        var sb=document.getElementById('scorebest');
        if(sb.innerHTML< Math.floor(counter/100)){
          sb.innerHTML= Math.floor(counter/100);
        }
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);}
function stp(){
var block = document.getElementById("block");
block.classList.remove("animateb");
}
