var directionsDisplay = null;
var directionsService = new google.maps.DirectionsService();
var map = null;

function initialize() {
    // START DEBUG
    document.getElementById('start').value = 'Ateneo De Manila University';
    document.getElementById('end').value = 'SM Fairview';
    // END DEBUG

    directionsDisplay = new google.maps.DirectionsRenderer();
    var admu = new google.maps.LatLng(14.6397, 121.0780);
    var mapOptions = {
        zoom: 15,
        center: admu,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsDisplay.setMap(map);
}

function calcRoute() {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;

    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
    };

    var directionsURL = 'http://maps.googleapis.com/maps/api/directions/json';
    directionsURL += '?origin=' + encodeURIComponent(start);
    directionsURL += '&destination=' + encodeURIComponent(end);
    directionsURL += '&sensor=false';
    directionsURL += '&mode=driving';

    // directionsService.route(request, function(response, status) {
    //     console.log(response);

    //     if (status == google.maps.DirectionsStatus.OK) {
    //       directionsDisplay.setDirections(response);
    //     }
    // });
}

google.maps.event.addDomListener(window, 'load', initialize);
