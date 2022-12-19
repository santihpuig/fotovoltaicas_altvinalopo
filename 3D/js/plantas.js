map.on("load", () => {
  map.addSource("plantas_icv", {
    type: "geojson",
    data: "data/plantas_icv.geojson",
  });

  map.addSource("plantas", {
    type: "geojson",
    data: "data/plantas.geojson",
  });

  // Plantas en aprobación

  map.addLayer({
    id: "aprobacionEstado",
    type: "fill",
    source: "plantas_icv",
    layout: {},
    filter: ["all", ["==", "org_instru", "Otras Administraciones"]],
    paint: {
      "fill-color": "#fdcc14",
      "fill-opacity": 0.75,
    },
  });

  map.addLayer({
    id: "aprobacionGVA",
    type: "fill",
    source: "plantas_icv",
    layout: {},
    filter: ["all", ["==", "org_instru", "Autonomica-GVA"]],
    paint: {
      "fill-color": "#fdcc14",
      "fill-opacity": 0.75,
    },
  });

  // Plantas desestimadas

  map.addLayer({
    id: "desestimadas",
    type: "fill",
    source: "plantas_icv",
    layout: {},
    filter: ["all", ["==", "org_instru", "Desestimada-Denegada"]],
    paint: {
      "fill-color": "#bc4b51",
      "fill-opacity": 0.75,
    },
  });

  // Plantas funcionando

  map.addLayer({
    id: "funcionando",
    type: "fill",
    source: "plantas",
    layout: {},
    filter: ["all", ["==", "estado", "En funcionamiento"]],
    paint: {
      "fill-color": "#499113",
      "fill-opacity": 0.75,
    },
  });

  // Pop ups

  map.on("click", "aprobacionEstado", function (e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        "<h3>" +
          e.features[0].properties.nom_pfv +
          "</h3>" +
          "<b>Potencia: </b>" +
          e.features[0].properties.potenciamw +
          "<br/>" +
          "<b>Superficie: </b>" +
          e.features[0].properties.sup_m2 +
          " m<sup>2</sup> <br/>" +
          "<b>Titular: </b>" +
          e.features[0].properties.titular_fv
      )
      .addTo(map);
  });

  map.on("click", "aprobacionGVA", function (e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        "<h3>" +
          e.features[0].properties.nom_pfv +
          "</h3>" +
          "<b>Potencia: </b>" +
          e.features[0].properties.potenciamw +
          "<br/>" +
          "<b>Superficie: </b>" +
          e.features[0].properties.sup_m2 +
          " m<sup>2</sup> <br/>" +
          "<b>Titular: </b>" +
          e.features[0].properties.titular_fv
      )
      .addTo(map);
  });

  map.on("click", "desestimadas", function (e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        "<h3>" +
          e.features[0].properties.nom_pfv +
          "</h3>" +
          "<b>Potencia: </b>" +
          e.features[0].properties.potenciamw +
          "<br/>" +
          "<b>Superficie: </b>" +
          e.features[0].properties.sup_m2 +
          " m<sup>2</sup> <br/>" +
          "<b>Titular: </b>" +
          e.features[0].properties.titular_fv
      )
      .addTo(map);
  });

  map.on("click", "funcionando", function (e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        "<h3>" +
          e.features[0].properties.nombre +
          "</h3>" +
          "<b>Potencia: </b>" +
          e.features[0].properties.potencia +
          "<br/>" +
          "<b>Superficie: </b>" +
          e.features[0].properties.area +
          " hectáreas <br/>" +
          "<b>Estado: </b>" +
          e.features[0].properties.estado
      )
      .addTo(map);
  });
});
