function updateDate(){
    var date = new Date();
    var hour = date.getHours()>9 ? String(date.getHours()) : "0"+String(date.getHours());
    var min = date.getMinutes()>9 ? String(date.getMinutes()) : "0"+String(date.getMinutes());

    var d = date.getDate()>9 ? String(date.getDate()) : "0"+String(date.getDate());
    var m = date.getMonth()>8 ? String(parseInt(date.getMonth()+1)) : "0"+String(parseInt(date.getMonth()+1));

    var time_now = hour+":"+min;
    var date_now = d+"-"+m+"-"+String(date.getFullYear());
    
    document.getElementById("setTime").innerText = time_now;
    document.getElementById("setDate").innerText = date_now;
}
function updateColor(){
    var color = document.getElementById("setColor");
    document.getElementById("time").style.backgroundColor = color.value;
    localStorage.setItem("time_color", color.value);
}
setInterval(updateDate, 500);
document.getElementById("setColor").addEventListener("change", updateColor);
onload = ()=>{
    if(localStorage.getItem("time_color") != null){
        var color = localStorage.getItem("time_color");
        document.getElementById("time").style.backgroundColor = color;
        document.getElementById("setColor").value = color;
    }
}
// 11:21