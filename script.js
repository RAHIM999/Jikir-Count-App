let x =0;
let y=0;
let z=0;
function subhanallah(){
    x+=1
    console.log(x)
    document.getElementById("subhan-id").innerText=x;
}
function alhamdulillah(){
    y+=1
    console.log(y)
    document.getElementById("alham-id").innerText=y;
}
function allahuakbar(){
    z+=1
    console.log(z)
    document.getElementById("allahu-id").innerText=z;
}
function completed(){
    var audio = new Audio('complete audio.mp3');
audio.play();
    document.getElementById("response-note").innerText="Mashallah💗Alhamdulilla💗 Taqabbalallahu Minna Wa Minkum! May Allah always Bless You 🤲 My Love, Nupur💗" 
}
function incompleted(){
    var audio = new Audio('incomplete audio.mp3');
    audio.play();
    document.getElementById("response-note").innerText="It's Okay. Allah Always Sees our Desires 💗 Insha'allah, Next time! May Allah Give You Barakah 🤲 My Love, Nupur💗"
}
function reset(){
    var audio = new Audio('thanks audio.mp3');
    audio.play();
    document.getElementById("subhan-id").innerText=0;
    document.getElementById("alham-id").innerText=0;
    document.getElementById("allahu-id").innerText=0;
    document.getElementById("response-note").innerText="";
    document.getElementById("response-note").innerText="";
}
