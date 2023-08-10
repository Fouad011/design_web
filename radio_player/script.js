class Player{
    constructor(){
        var player = document.getElementById("player");
        player.style.height = screen.height + "px";
        if(screen.width<500){
            player.style.width = screen.width + "px";
        }

        var content = document.getElementById("content");
        content.style.height = screen.height-300 + "px";
    }
}

onload = new Player();

class AudioPlayer{
    constructor(){

        this.audio = ["https://n02.radiojar.com/0tpy1h0kxtzuv", "https://nidaa.fm:8443/stream.mp3", "https://montecarlodoualiya128k.ice.infomaniak.ch/mc-doualiya.mp3"];
        this.titles_audio = ["إذاعة القرآن الكريم", "إذاعة نداء المعرفة", "مونت كارلو"];
        this.titles_radio = ["المملكة العربية السعودية", "بيروت، لبنان", " الدولية"];

        this.audio_file = document.getElementById("audio_file");
        this.title_audio = document.getElementById("title_audio");
        this.title_radio = document.getElementById("title_radio");

        this.next_audio = document.getElementById("next_audio");
        this.back_audio = document.getElementById("back_audio");

        this.isPlayed;

        this.play_pause_btn = document.getElementById("play_pause");

        this.play_pause_btn.addEventListener("click", ()=>{
            this.playPause();
        })
        this.next_audio.addEventListener("click", ()=>{
            this.nextAudio();
            localStorage.setItem("server_count", this.audio_count);
        })
        this.back_audio.addEventListener("click", ()=>{
            this.backAudio();
            localStorage.setItem("server_count", this.audio_count);
        })

        if(localStorage.getItem("server_count") != null){
            this.audio_count = parseInt(localStorage.getItem("server_count"));
        }else{
            this.audio_count = 0;
        }

        this.audio_file.src = this.audio[this.audio_count];
        this.title_audio.innerHTML = this.titles_audio[this.audio_count];
        this.title_radio.innerHTML = this.titles_radio[this.audio_count];
        
    }

    playPause(){
        if(this.isPlayed){
            this.audio_file.pause();
            this.isPlayed = false;
            this.play_pause_btn.src = "./icons/play.png";
        }else{
            this.audio_file.play();
            this.isPlayed = true;
            this.play_pause_btn.src = "./icons/pause.png";
        }
    }

    nextAudio(){
        if(this.audio_count<this.audio.length-1){
            this.audio_count++;
        }else{
            this.audio_count = 0;
        }
        this.playAudio();
    }

    backAudio(){
        console.log(this.audio_count)
        if(this.audio_count>0){
            this.audio_count--;
            console.log("if "+this.audio_count)
        }else{
            this.audio_count = this.audio.length-1;
            console.log("else "+this.audio_count)
        }
        this.playAudio();
    }

    playAudio(){
        this.audio_file.src = this.audio[this.audio_count];
        this.title_audio.innerHTML = this.titles_audio[this.audio_count];
        this.title_radio.innerHTML = this.titles_radio[this.audio_count];
        this.play_pause_btn.src = "./icons/pause.png";
        this.audio_file.play();
        this.isPlayed = true;
    }

    
}

onload = new AudioPlayer();

class Volume{
    constructor(){

        this.audio_file = document.getElementById("audio_file");
        this.audio_file.volume = 50/100;

        this.volume_range = document.getElementById("volume_range");
        
        this.volume_range.addEventListener("change", ()=>{
            this.volumeControle();
        });
        this.volume_range.addEventListener("mousemove", ()=>{
            this.volumeControle();
        });

        this.volume_img = document.getElementById("volume_img");
        this.volume_value = document.getElementById("volume_value");



        this.speed_range = document.getElementById("speed_range");
        this.speed_value = document.getElementById("speed_value");

        var volume;
        if(localStorage.getItem("volume") != null){
            volume = parseInt(localStorage.getItem("volume"));
        }else{
            volume = 50;
        }
        this.audio_file.volume = volume/100;
        this.volume_value.innerText = volume;
        this.volume_range.value = volume;

        this.audio_file.playbackRate = 1;
        this.speed_value.innerHTML = "1";
        this.speed_range.value = 4;


        this.speed_range.addEventListener("change", ()=>{
            this.speed();
        });
        this.speed_range.addEventListener("mousemove", ()=>{
            this.speed();
        });
        
    }

    volumeControle(){
        this.audio_file.volume = this.volume_range.value/100;
        this.volume_value.innerText = this.volume_range.value;
        if(this.volume_range.value == 0){
            this.volume_img.src = "./icons/volumeDown.png";
        }else{
            this.volume_img.src = "./icons/volumeUp.png";
        }
        localStorage.setItem("volume", this.volume_range.value);
    }

    speed(){
        var n, r, sign, s;
        sign = "";
        n = parseInt(this.speed_range.value/4);
        r = this.speed_range.value%4;
    //    console.log(this.speed_range.value + "  " + n + " "  + r)
       if(r != 0){
        s = `<sup>${r}/4</sup>`;
       }else{
        s = ``;
       }
        this.speed_value.innerHTML = `
        ${n}${s}
        `;

        this.audio_file.playbackRate = n + r/4;
        // console.log(n + r/4);
    }

}

onload = new Volume();