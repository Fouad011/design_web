class Slider{
    constructor(){
        this.images = ['./img/a.jpg', './img/b.jpg', './img/c.jpg', './img/d.jpg', './img/e.jpg'];
        this.links = ['./img/a.jpg', './img/b.jpg', './img/c.jpg', './img/d.jpg', './img/e.jpg'];
        this.counter = 0;

        // this.playSlider(); //play avec le telechargement de la page sinon activer playSlider apres 3000s
        
        setInterval(()=>{
            this.playSlider();
        }, 3*1000)
    }
    playSlider(){
        if(this.counter<this.images.length-1){
            this.counter++;
        }else{
            this.counter = 0;
        }
        document.slider_img.src = this.images[this.counter];
        document.getElementById("link_img").href = this.links[this.counter];
        document.getElementById("slider_nbr").innerText = this.counter+1;
    }
}
onload = new Slider();