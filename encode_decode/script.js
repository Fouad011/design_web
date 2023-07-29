let text = document.getElementById("text");
let result = document.getElementById("result");
let typeCode = document.getElementById("typeCode");

text.addEventListener("input", ()=>{
    if(typeCode.value == "encode"){
        result.value = window.btoa(text.value);
    }else if(typeCode.value == "decode"){
        result.value = window.atob(text.value);
    }
    localStorage.setItem("text", text.value);
    localStorage.setItem("result", result.value);
});

typeCode.addEventListener("change", ()=>{
    localStorage.setItem("typeCode", typeCode.value);
    text.value = "";
    result.value = "";
});

document.body.addEventListener("load", ()=>{
    if(typeCode.value != null){
        typeCode.value = localStorage.getItem("typeCode");
        text.value = localStorage.getItem("text");
        result.value = localStorage.getItem("result");
    }
});