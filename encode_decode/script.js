let clear_text = document.getElementById("clear_text");
let cipher_text = document.getElementById("cipher_text");
let typeCode = document.getElementById("typeCode");

clear_text.addEventListener("input", ()=>{
    cipher_text.value = window.btoa(clear_text.value);
   
    localStorage.setItem("clear_text", clear_text.value);
    localStorage.setItem("cipher_text", cipher_text.value);
});

cipher_text.addEventListener("input", ()=>{
    clear_text.value = window.atob(cipher_text.value);
   
    localStorage.setItem("clear_text", cipher_text.value);
    localStorage.setItem("cipher_text", cipher_text.value);
});


typeCode.addEventListener("change", ()=>{
    localStorage.setItem("typeCode", typeCode.value);
    clear_text.value = "";
    cipher_text.value = "";
});

document.body.addEventListener("load", ()=>{
    if(typeCode.value != null){
        typeCode.value = localStorage.getItem("typeCode");
        clear_text.value = localStorage.getItem("clear_text");
        cipher_text.value = localStorage.getItem("cipher_text");
    }
});