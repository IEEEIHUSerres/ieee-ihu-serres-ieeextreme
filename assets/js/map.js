jQuery(document).ready(function ($) {

    'use strict';
    //set your google maps parameters
    let $latitude = 41.074806,
        $longitude = 23.552583,
        $map_zoom = 18;

    //google map custom marker icon - .png fallback for IE11
    let is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
    let $marker_url = (is_internetExplorer11) ? 'assets/img/ieee-ihu-serres-map-icon.png' : 'assets/img/ieee-ihu-serres-map-icon.png';

    //define the basic color of your map, plus a value for saturation and brightness
    let $main_color = '#2d313f',
        $saturation = -20,
        $brightness = 5;

    //we define here the style of the map

    //set google map options
    let map_options = {
        center: new google.maps.LatLng($latitude, $longitude),
        zoom: $map_zoom,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
    };

    //inizialize the map
    let map = new google.maps.Map(document.getElementById('conatiner-map'), map_options);
    //add a custom marker to the map
    let marker = new google.maps.Marker({
        position: new google.maps.LatLng($latitude, $longitude),
        map: map,
        visible: true,
        icon: $marker_url,
    });

    //add custom buttons for the zoom-in/zoom-out on the map
    function CustomZoomControl(controlDiv, map) {
        //grap the zoom elements from the DOM and insert them in the map
        let controlUIzoomIn = document.getElementById('cd-zoom-in'),
            controlUIzoomOut = document.getElementById('cd-zoom-out');

    }

    let zoomControlDiv = document.createElement('div');
    let zoomControl = new CustomZoomControl(zoomControlDiv, map);

    //insert the zoom div on the top left of the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
});