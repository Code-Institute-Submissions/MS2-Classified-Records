function initMap() {
    //set initial location to store location
    var storeLocation = {
            lat: 54.003053,
            lng: -6.403441
        };
    
    //set zoom level on map
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: storeLocation
        });
    
    //add marker to map at store location
    var marker = new google.maps.Marker({position: storeLocation, map: map});
}