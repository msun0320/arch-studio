'use strict';

const locations = [
  {
    name: 'main office',
    location: [35.860119, -86.660156],
  },
  {
    name: 'office II',
    location: [30.266666, -97.73333],
  },
];

// Setup map
const map = L.map('map').setView(locations[0].location, 13);

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

// Add marker
const marker1 = L.marker(locations[0].location).addTo(map);
const marker2 = L.marker(locations[1].location).addTo(map);

map.fitBounds([locations[0].location, locations[1].location]);

// Show popup
const mainOfficeButton = document.querySelector('.main-office .btn-text');
const officeIIButton = document.querySelector('.office-II .btn-text');

const showPopup = location => {
  L.popup().setLatLng(location.location).setContent(location.name).openOn(map);
};

mainOfficeButton.addEventListener('click', () => showPopup(locations[0]));
officeIIButton.addEventListener('click', () => showPopup(locations[1]));
