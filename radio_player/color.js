class Color{
    constructor(){
        this.player = document.getElementById("player");
        this.color;

        this.color1 = document.getElementById("color1");
        this.color1.addEventListener("click", ()=>{
            this.selectColor("color1");
        });

        this.color2 = document.getElementById("color2");
        this.color2.addEventListener("click", ()=>{
            this.selectColor("color2");
        });

        this.color3 = document.getElementById("color3");
        this.color3.addEventListener("click", ()=>{
            this.selectColor("color3");
        });

        this.color4 = document.getElementById("color4");
        this.color4.addEventListener("click", ()=>{
            this.selectColor("color4");
        });

        this.color5 = document.getElementById("color5");
        this.color5.addEventListener("click", ()=>{
            this.selectColor("color5");
        });

        if(localStorage.getItem("color") != null){
            this.selectColor(localStorage.getItem("color"));
        }else{
            // default color
            this.selectColor("color2");
        }

    }
    selectColor(color){
        if(color == "color1"){
            document.body.style.backgroundColor = "rgb(0 86 214 / 49%)";
            this.player.style.backgroundColor = "rgb(0, 86, 214)";
        }else if(color == "color2"){
            document.body.style.backgroundColor = "rgb(0 0 0 / 79%)";
            this.player.style.backgroundColor = "black";
        }else if(color == "color3"){
            document.body.style.backgroundColor = "rgb(1 110 143 / 49%)";
            this.player.style.backgroundColor = "rgb(1, 110, 143)";
        }else if(color == "color4"){
            document.body.style.backgroundColor = "rgb(56 87 26 / 49%)";
            this.player.style.backgroundColor = "rgb(56, 87, 26)";
        }else if(color == "color5"){
            document.body.style.backgroundColor = "rgb(255 98 80 / 49%)";
            this.player.style.backgroundColor = "rgb(255, 98, 80)";
        }
        localStorage.setItem("color", color);
    }
}

onload = new Color();