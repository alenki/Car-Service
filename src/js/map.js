var map = L.map('map', {attributionControl: false}).setView([25.197253, 55.274132], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([25.197253, 55.274132]).addTo(map)
    // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();