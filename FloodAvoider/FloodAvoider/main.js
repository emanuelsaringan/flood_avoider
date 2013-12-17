var directionsDisplay = null;
var directionsService = new google.maps.DirectionsService();
var map = null;

function initialize() {
    document.getElementById('start').value = 'Ateneo De Manila University';
    document.getElementById('end').value = 'De La Salle University';

    directionsDisplay = new google.maps.DirectionsRenderer();
    var admu = new google.maps.LatLng(14.6397, 121.0780);
    var mapOptions = {
        zoom: 15,
        center: admu,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('directions_panel'));
}

function calcRoute() {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;

    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING,
        region: 'phi',
        provideRouteAlternatives: true
    };

    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        } else {
            alert('Unable to route.\nERROR: ' + status);
        }
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
