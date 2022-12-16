mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FudGlocHVpZyIsImEiOiJrYkhOMDVnIn0.ak6qwXtkOps01I5G-LCS_A";
var map = new mapboxgl.Map({
  container: "map",
  attributionControl: true,
  zoom: 12,
  minZoom: 11,
  maxZoom: 14,
  center: [-0.8907911616404625, 38.60074879456188],
  pitch: 60,
  bearing: 10,
  style: "mapbox://styles/santihpuig/clbozinmf000q15lqzsj7b0kx",
});

map.setLight({
  anchor: "viewport",
  color: "blue",
  intensity: 0.5,
  position: [1.5, 90, 80],
});
