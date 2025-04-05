let user=null;
let computer=null;
let u_score=0;
let com_score=0;
let u=document.getElementById('urs');
let c=document.getElementById('theres');
let m=document.getElementsByClassName('msg')[0];

let choic=document.querySelectorAll('.choice');
choic.forEach((c)=>{
    c.addEventListener('click',()=>{
        user=id=parseInt(c.getAttribute('id'));
        mainFun();
    })
})


function mainFun(){
     comChoice();
     if(computer==user){
        com_score++;
        c.innerText=com_score;
        m.innerText='You lose hahaha'
        m.setAttribute('class','iwin');
     }
     else{
        u_score++;
        u.innerText=u_score;
        m.innerText='Damn i lost aaaaa'
        m.setAttribute('class','uwin');
     }
}
function comChoice(){
    computer=Math.floor(Math.random()*3);
}

let r=document.getElementById('reset');
r.addEventListener('click',()=>{
    u_score=0;
    com_score=0;
    c.innerText=com_score;
    u.innerText=com_score;
    m.setAttribute('class','msg')
    m.innerText='Play your move';
})