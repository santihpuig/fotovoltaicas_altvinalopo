 // Mapa base

 var esquinaizq = L.latLng(38.81018, -1.12196);
 var esquinader = L.latLng(38.22120, -0.58911);

 var bounds = L.latLngBounds(esquinaizq, esquinader);

 var map = L.map("map", {attributionControl: true, fullscreenControl: true, /*maxBounds: bounds*/}).setView([38.60638928702474, -0.8396451102344084], 11);
 
 var simple = L.tileLayer(
 "https://api.mapbox.com/styles/v1/santihpuig/ckkh2x3r70ybw17pdt6xzqv98/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FudGlocHVpZyIsImEiOiJrYkhOMDVnIn0.ak6qwXtkOps01I5G-LCS_A",
 {
     minZoom: 1,
     maxZoom: 18,
     attribution: 'Map data &copy; <a href="http://openstreetmap.org"> OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>' + ' | <a href="http://salvatierravillena.blogspot.com"/>Asociación Salvatierra</a>',
 }
 );

var negro = L.tileLayer(
"https://api.mapbox.com/styles/v1/santihpuig/ckhxj04u10vso19r98s8byzl3/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FudGlocHVpZyIsImEiOiJrYkhOMDVnIn0.ak6qwXtkOps01I5G-LCS_A",
{
    minZoom: 11,
    maxZoom: 20,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org"> OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
}).addTo(map);

 var outdoors = L.tileLayer(
 "https://api.mapbox.com/styles/v1/santihpuig/ckmbwlju15zag17qy12lcf8ue/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FudGlocHVpZyIsImEiOiJrYkhOMDVnIn0.ak6qwXtkOps01I5G-LCS_A",
 {
     minZoom: 1,
     maxZoom: 18,
     attribution: 'Map data &copy; <a href="http://openstreetmap.org"> OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>' + ' | <a href="http://salvatierravillena.blogspot.com"/>Asociación Salvatierra</a>',
 }
 );


 var ortofoto = new L.tileLayer.wms("http://www.ign.es/wms-inspire/pnoa-ma?service=WMS", {
         layers: 'OI.OrthoimageCoverage',
         format: 'image/png',
         attribution: 'CC BY 4.0 ign.es' + ' | <a href="http://salvatierravillena.blogspot.com"/>Asociación Salvatierra</a>',
         minZoom: 1,
         maxZoom: 18,
     });


 var rasterbtn = new L.tileLayer.wms("http://www.ign.es/wms-inspire/mapa-raster?version=1.3.0&service=WMS", {
         layers: 'mtn_rasterizado',
         format: 'image/png',
         attribution: 'CC BY 4.0 ign.es' + ' | <a href="http://salvatierravillena.blogspot.com"/>Asociación Salvatierra</a>',
         minZoom: 1,
         maxZoom: 18,
     });


 // Medidor
 
 var medidor = L.control.measure({position: 'topleft', primaryLengthUnit: 'meters', secondaryLengthUnit: 'kilometers', primaryAreaUnit: 'hectares', secondaryAreaUnit: 'sqmeters', activeColor: '#5590cf', completedColor: '#5590cf'});
     
 medidor.addTo(map);