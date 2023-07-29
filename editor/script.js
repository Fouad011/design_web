let codes = document.getElementById("codes");
let play = document.getElementById("play");
let remove = document.getElementById("remove");
let result = document.getElementById("result");

let valInitial = `<html>
    <head>
        <title></title>
    </head>
    <body>
        
    </body>
</html>
`
play.onclick = ()=>{
    result.innerHTML = codes.value;
    localStorage.setItem("RESULT", codes.value)
}
remove.onclick = function(){
    codes.value = valInitial;
    result.innerHTML = "";
    localStorage.removeItem("RESULT");
}

onload = ()=>{
    if(localStorage.getItem("RESULT") != null){
        codes.value = localStorage.getItem("RESULT")
        result.innerHTML = localStorage.getItem("RESULT");
    }
}