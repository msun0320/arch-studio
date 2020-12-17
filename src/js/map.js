'use strict';

const map = L.map('map').setView([35.860119, -86.660156], 13);
const marker1 = L.marker([35.860119, -86.660156]).addTo(map);
const marker2 = L.marker([30.266666, -97.73333]).addTo(map);

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1IjoibWluZ3l1ZXMiLCJhIjoiY2tpc2MwYXo4MDBsejJycGhjdXM5cHY0YiJ9.wJ6tOod-78CVwl3LKSDpPQ',
  }
).addTo(map);

map.fitBounds([
  [35.860119, -86.660156],
  [30.266666, -97.73333],
]);
