let coords = document.getElementById("main");
    
   
navigator.geolocation.getCurrentPosition(getcoordinates);


function getcoordinates(pos){
coords_p.innerHTML = pos.coords.longitude + " " + pos.coords.latitude + " "+ Date();


}