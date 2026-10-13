jQuery(document).ready(function ($) {

    'use strict';
    //set your map parameters
    let $latitude = 41.074806,
        $longitude = 23.552583,
        $map_zoom = 18;

    //custom marker icon
    let marker_icon = L.icon({
        iconUrl: 'assets/img/ieee-ihu-serres-map-icon.png',
        iconSize: [51, 49],
        iconAnchor: [25, 49],
    });

    //inizialize the map
    let map = L.map('conatiner-map', {
        center: [$latitude, $longitude],
        zoom: $map_zoom,
        scrollWheelZoom: false,
    });

    //OpenStreetMap tiles, no API key required
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
    }).addTo(map);

    //add a custom marker to the map
    L.marker([$latitude, $longitude], {icon: marker_icon}).addTo(map);
});
