
let gameSeq=[];
let userSeq=[];

let start=false;
let level=0;

let score=0;

let colorBtn=["pink","blue","orange","purple"];

let h3=document.querySelector("h3");

let maxScore=document.querySelector(".maxScore");

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("start game");
        start=true;
    }

    levelUp();
});

function flashBtn(btn){
    btn.classList.add("flashClass");
    setTimeout(function(){
        btn.classList.toggle("flashClass");
    },250);
}

function userFlash(btn){
    btn.classList.add("flashUser");
    setTimeout(function(){
        btn.classList.toggle("flashUser");
    },250);
}

function levelUp(){

    userSeq=[];
    level++;

    
    h3.innerText=`Level ${level}`;

    let randomInx= Math.floor(Math.random()*4);
    // console.log(randomInx);
    let randomColor=colorBtn[randomInx];

    gameSeq.push(randomColor);
    console.log(gameSeq);
    let randbtn=document.querySelector(`.${randomColor}`);
    // console.log(randbtn);

    //random button
    flashBtn(randbtn);
}

function btnPress(){
    console.dir(this);
    let colorBtn=this;
    userFlash(colorBtn);
    
    userColor=colorBtn.getAttribute("id");
    
    userSeq.push(userColor);
    console.log(userSeq);

    check(userSeq.length-1);
}

let allbox=document.querySelectorAll(".boxes");
for(box of allbox){
    box.addEventListener("click",btnPress);
}

function check(index){
//    console.log(`your score is ${level}`);
    if(gameSeq[index]===userSeq[index]){
        //two more condition : middle and end.
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML=` GAME OVER . Your score is <b>${level-1}</b>. <br> Press any key to start again`;
            document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor="rgb(243, 222, 226)";
         },150);
         if(score<(level-1)){
            score=level-1;
        }
        maxScore.innerHTML=`Maximum Score = ${score}`;
        userSeq=[];
        gameSeq=[];
        level=0;
        start=false;
    }
}



