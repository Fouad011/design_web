var clock = document.getElementById("clock");
var start_btn = document.getElementById("start_btn");
var stop_btn = document.getElementById("stop_btn");
var turn_btn = document.getElementById("turn_btn");
var clear_btn = document.getElementById("clear_btn");
var turn_result = document.getElementById("turn_result");

let mls = 0, s = 0, m =0, h = 0;
let clock_value;
function run_clock(){
    let mlss, ss, ms, hs;
    mls++;
    if(mls>99){
        mls = 0;
        s++;
        if(s>59){
            s = 0;
            m++;
            if(m>59){
                m = 0;
                h++;
            }
        }
    }
    
    mlss = mls>9 ? String(mls) : ("0"+String(mls));
    ss = s>9 ? String(s) : ("0"+String(s));
    ms = m>9 ? String(m) : ("0"+String(m));
    hs = h>9 ? String(h) : ("0"+String(h));
    clock_value = hs+":"+ms+":"+ss+"."+mlss;
    clock.innerText = clock_value;
}


var my_clock, c=-1;

// if(c==-1){
//     turn_btn.style.backgroundColor = "#888888";
// }

start_btn.addEventListener("click", ()=>{
    my_clock = setInterval(run_clock, 10);
    if(c==-1){c=0}
    start_btn.style.display = "none";
    stop_btn.style.display = "block";
    turn_btn.style.display = "block";
    clear_btn.style.display = "none";
    turn_btn.disabled = false;
    turn_btn.style.backgroundColor = "rgb(255 255 255 / 33%)";

});

stop_btn.addEventListener("click", ()=>{
    clearInterval(my_clock);
    start_btn.style.display = "block";
    stop_btn.style.display = "none";
    turn_btn.style.display = "none";
    clear_btn.style.display = "block";
});

turn_btn.addEventListener("click", ()=>{
    c++;
    turn_result.innerHTML = `
    <div id="result_item">
    <div id="div_clock">${clock_value}</div>
    <div id="div_turn">Turn ${c}</div>
    </div>
    ` + turn_result.innerHTML;
    if(c>16){
        turn_result.style.height = "auto";
    }
});

clear_btn.addEventListener("click", ()=>{
    c = -1;
    clock.innerText = "00:00:00.00";
    turn_result.innerHTML = "";
    turn_btn.style.display = "block";
    clear_btn.style.display = "none";
    turn_btn.disabled = true;
    turn_btn.style.backgroundColor = "rgb(255 255 255 / 26%)";
    turn_result.style.height = "676px";
    // clearInterval(my_clock);
    mls = 0;
    s = 0;
    m =0;
    h = 0;
});