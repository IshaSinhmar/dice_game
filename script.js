var button=document.querySelector(".button");
var h1=document.querySelector("h1");
var reset=document.querySelector(".reset");
function generateNumber(){
var a=Math.random();
a=(a*6)+1;
a=Math.floor(a);
var b=Math.random();
b=(b*6)+1;
b=Math.floor(b);
winner(a,b);
display(a,b);
};
function winner(a,b){
    if(a>b){
        h1.innerText="Winner is Player 1";
    }
    else if(a<b){
        h1.innerText="Winner  is player2";
    }
    else{
        h1.innerText="It's a draw";
    }
};
button.addEventListener("click",function() {
    button.style.display="none";
generateNumber();
});
function display(a,b){
    console.log(a);
    console.log(b);
    if(a===1 ){
        const toHide = document.querySelectorAll(".two,.three,.four,.five,.six");
        toHide.forEach(el => el.style.display = "none");
    }
     if(a===2 ){
        const toHide = document.querySelectorAll(".two,.three,.four,.five");
        toHide.forEach(el => el.style.display = "none");
    }
     if(a===3 ){
        const toHide = document.querySelectorAll(".two,.five,.six");
        toHide.forEach(el => el.style.display = "none");
    }
    if(a===4 ){
        const toHide = document.querySelectorAll(".two,.five");
        toHide.forEach(el => el.style.display = "none");
    }
    if(a===5 ){
        const toHide = document.querySelectorAll(".four");
        toHide.forEach(el => el.style.display = "none");
    }
     if(b===1 ){
        const toHide = document.querySelectorAll(".iwo,.ihree,.iour,.iive,.iix");
        toHide.forEach(el => el.style.display = "none");
    }
     if(b===2 ){
        const toHide = document.querySelectorAll(".iwo,.ihree,.iour,.iive");
        toHide.forEach(el => el.style.display = "none");
    }
     if(b===3 ){
        const toHide = document.querySelectorAll(".iwo,.iive,.iix");
        toHide.forEach(el => el.style.display = "none");
    }
    if(b===4 ){
        const toHide = document.querySelectorAll(".iwo,.iive");
        toHide.forEach(el => el.style.display = "none");
    }
    if(b===5 ){
        const toHide = document.querySelectorAll(".iour");
        toHide.forEach(el => el.style.display = "none");
    }
    
    
};
reset.addEventListener("click",function(){
    h1.innerText="Roll me"
    button.style.display="";
     const toHid = document.querySelectorAll(".one,.two,.three,.four,.five,.six");
        toHid.forEach(el => el.style.display = "");
         const toHie = document.querySelectorAll(".iwo,.ihree,.iour,.iive,.iix,.ine");
        toHie.forEach(el => el.style.display = "");
});














