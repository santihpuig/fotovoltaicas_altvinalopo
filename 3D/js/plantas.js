// Plantas en aprobación

map.on("load", function () {
  map.addSource("plantas", {
    type: "geojson",
    data: "data/aprobacion.geojson",
  });
  map.addLayer({
    id: "plantas",
    type: "fill",
    source: "plantas",
    layout: {},
    paint: {
      "fill-color": "#e9c46a",
      "fill-opacity": 0.75,
    },
  });

  map.on("click", "plantas", function (e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        "<b>" +
          e.features[0].properties.nombre +
          "</b><br/>" +
          e.features[0].properties.potencia +
          "</b><br/>" +
          e.features[0].properties.area +
          " hectáreas"
      )
      .addTo(map);
  });

  map.on("mouseenter", "plantas", function () {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "plantas", function () {
    map.getCanvas().style.cursor = "";
  });
});

// Plantas funcionando

map.on("load", function () {
  map.addSource("funcionando", {
    type: "geojson",
    data: "data/funcionando.geojson",
  });
  map.addLayer({
    id: "funcionando",
    type: "fill",
    source: "funcionando",
    layout: {},
    paint: {
      "fill-color": "#e76f51",
      "fill-opacity": 0.75,
    },
  });

  map.on("click", "funcionando", function (e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        "<b>" +
          e.features[0].properties.nombre +
          "</b><br/>" +
          e.features[0].properties.potencia +
          "</b><br/>" +
          e.features[0].properties.area +
          " hectáreas"
      )
      .addTo(map);
  });

  map.on("mouseenter", "funcionando", function () {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "funcionando", function () {
    map.getCanvas().style.cursor = "";
  });
});
