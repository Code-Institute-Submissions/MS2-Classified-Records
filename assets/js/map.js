function initMap() {
    var storeLocation = {
            lat: 54.003053,
            lng: -6.403441
        };

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: storeLocation
        });
    
    var marker = new google.maps.Marker({position: storeLocation, map: map});
}