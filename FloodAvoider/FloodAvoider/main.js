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

    $.ajax({
        url: 'http://jien.net84.net/sensorApplication/getSensorData.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // var data = '{ "sensor": [{"id": 1, "lat": 19.3456, "lon": 19.2345, "time": "2013-09-17 23:54:13", "temp": 36.7, "floodheight": 3.234, "signal": -39.5, "battery": 30}, {"id": 2, "lat": 98.2135, "lon": 34.4568, "time": "2013-09-18 03:15:03", "temp": 30.9, "floodheight": 1.1, "signal": -2, "battery": 2}, {"id": 3, "lat": 98.2135, "lon": 34.4568, "time": "2013-09-18 03:17:45", "temp": 30.9, "floodheight": 1.1, "signal": -2, "battery": 2}, {"id": 4, "lat": 98.2135, "lon": 34.4568, "time": "2013-09-18 03:21:41", "temp": 30.9, "floodheight": 1.1, "signal": -2}, {"id": 5, "lat": 98.2135, "lon": 34.4568, "time": "2013-09-18 03:22:04", "temp": 30.9, "floodheight": 1.1, "signal": -2, "battery": 2}, {"id": 6, "lat": 98.2135, "lon": 34.4568, "time": "2013-09-18 03:24:52", "temp": 30.9, "floodheight": 1.1, "signal": -2, "battery": 2}, {"id": 7, "lat": 98.2135, "lon": 34.4568, "time": "2013-09-18 03:25:37"}]}';
            var coords = data.sensor;
            var coordsLen = coords.length;
            var coord = null;
            for (var i = 0; i < coordsLen; i++) {
                coord = coords[i];
                new google.maps.Marker({
                    position: new google.maps.LatLng(coord.lat, coord.lon),
                    map: map
                });
            }
        },
        error: function(data) {
            alert('An error occurred while retrieving flooded locations!');
        }
    });
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
