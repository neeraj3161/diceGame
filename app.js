

document.querySelector(".btn").addEventListener("click",function(){
    var randomVar=(Math.random()*5)+1;
var rounded1=(Math.round(randomVar));
var randomVar=(Math.random()*5)+1;
var rounded2=(Math.round(randomVar));

function player1(){
   document.querySelector('.img1').src="/diceGame/images/dice"+rounded1+".png";
   return rounded1;
}
function player2(){
   document.querySelector('.img2').src="/diceGame/images/dice"+rounded2+".png";
   return rounded2;
}
function won(){
    if (rounded1>rounded2){
        document.querySelector(".won").innerHTML="<h3>Player 1 Won!!</h3><p>👏</p>"
    }else if(rounded1==rounded2){
        document.querySelector(".won").innerHTML="<h3>It's a Draw!! Try again</h3><p>😂</p>"
    }
    
}
    player1();
    player2();
    won();
})


