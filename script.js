
  var mymap = L.map('mapid');

  mymap.setView(new L.LatLng(53.5656, 9.9854), 15);
  mymap.setView(new L.LatLng(53.5613, 9.9952), 15);
  mymap.setView(new L.LatLng(53.5665, 9.9846), 15);
  
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVhdGhoZWxsIiwiYSI6ImNrNzF4N2JuYzBhNWIzZXBzOGlxeGRjc2wifQ.pwUlaeQPx1RBk21yyAbeOw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidmFsZWgtdmZpIiwiYSI6ImNrcGdwcjA0MTJkd2QycmxsaW9wb2ZtYjYifQ.fL9Uzpqp5Hc9PkH5TFUh3Q'
}).addTo(mymap);


var marker = L.marker([53.5656, 9.9854])
  .addTo(mymap)
  .bindPopup("<h2>Staats- und Universitätsbibliothek Hamburg</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac bibendum tortor, vitae semper sapien. </p> <img src='img/bibliothek.JPG' alt='staatsbibliothek'>");

var marker = L.marker([53.5613, 9.9952])
  .addTo(mymap)
  .bindPopup("<h2>Centre for the Study of Manuscript Cultures</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac bibendum tortor, vitae semper sapien. </p> <img src='img/logoCSMC.jpg' alt='CSMC'>");

var marker = L.marker([53.5665, 9.9846])
  .addTo(mymap)
  .bindPopup("<h2>Universität Hamburg</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac bibendum tortor, vitae semper sapien. Nunc commodo nunc dolor.  </p> <img src='img/UHH.jpg' alt='UHH'>");
