let my_location, isLive=false, accesLocation;

document.getElementById("getLocation").onclick = ()=>{

    if(!isLive){
        my_location = navigator.geolocation.watchPosition(
            function(position){
    
                accesLocation = true;
    
                document.getElementById("getLocation").innerHTML = "Stop sharing";
                isLive = true;
    
                document.getElementById("alert").innerHTML = `
                <div class="alert alert-success" role="alert">
                    your location is displayed correctly on
                </div>
                `
    
                document.getElementById("map").innerHTML = 
                `<iframe height="400" width="100%" src="https://www.openstreetmap.org/export/embed.html?bbox=${position.coords.longitude},${position.coords.latitude}&;layer=mapnik"></iframe>`;
            },
            function(error){
                accesLocation = false;
                switch(error.code){
                    case error.PERMISSION_DENIED:
                        document.getElementById("alert").innerHTML = `
                        <div class="alert alert-danger" role="alert">
                            You have refused access to your location
                        </div>`;
                        break;
                    case error.UNKNOWN_ERROR:
                        document.getElementById("alert").innerHTML = `
                        <div class="alert alert-danger" role="alert">
                            Error Unknown
                        </div>`;
                        break;
                }
            }
        )
    }else if(isLive && accesLocation){

        document.getElementById("alert").innerHTML = `
        <div class="alert alert-success" role="alert">
            your location is displayed correctly off
        </div>
        `
        navigator.geolocation.clearWatch(my_location);
        document.getElementById("map").innerHTML = 
            `<iframe height="300" width="100%" src="https://www.openstreetmap.org/export/embed.html?bbox=,&;layer=mapnik"></iframe>`;
        document.getElementById("getLocation").innerHTML = "Get my location";
        isLive = false;
    }

    


}