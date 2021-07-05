'use strict'
const GEO_DECODER = "https://maps.googleapis.com/maps/api/geocode";
const API_KEY = '' ;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
}

const fetchCity = async (lat, lng) => {
  const requestURL = `${GEO_DECODER}/json?latlng=${lat},${lng}&result_type=locality&key=${API_KEY}`;
  const result = await fetch(requestURL);
  return await result.json();
};

async function successFunction(position) {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  const response = await fetchCity(lat, lng);
  let city;

  if (response.status === "OK") {
    let location;
    response.results.forEach(({ address_components }) => {
      address_components.forEach((component) => {
        
        if (component.types.includes("locality")) {
          location = component.long_name;
        }
      });
    });
    city = location || "unknown";
  }

  let currentPosition = document.querySelector('#city');
  let contactPhone = document.querySelector('.contacts-midheader__phone')
  currentPosition.innerHTML = city.toUpperCase();
  if (city != "Москва") {
    contactPhone.innerHTML = "7 900 0000 777";
  }
}

function errorFunction() {
  alert('Geocoder failed');
}


