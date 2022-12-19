map.on("load", () => {
  map.addSource("plantas", {
    type: "geojson",
    data: "data/plantas.geojson",
  });

  // Plantas en aprobación

  map.addLayer({
    id: "aprobacion",
    type: "fill",
    source: "plantas",
    layout: {},
    filter: ["all", ["==", "estado", "En fase de aprobación"]],
    paint: {
      "fill-color": "#fdcc14",
      "fill-opacity": 0.75,
    },
  });

  // Plantas desestimadas

  map.addLayer({
    id: "desestimadas",
    type: "fill",
    source: "plantas",
    layout: {},
    filter: ["all", ["==", "estado", "Informe desfavorable"]],
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

  map.on("click", "aprobacion", function (e) {
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
          e.features[0].properties.estado +
          "<br/><br/>" +
          "<b>🔗<a target='_blank' href='" +
          e.features[0].properties.enlace +
          "'> Anteproyecto y EsIA</a></b>" +
          "<br/>" +
          "<b>🔗<a target='_blank'href='" +
          e.features[0].properties.observacio +
          "'> Información adicional (resoluciones, noticias, etc.)</a></b>" +
          "<br/><br/>" +
          "<b>Última revisión: </b>" +
          e.features[0].properties.actualizac
      )
      .addTo(map);
  });

  map.on("click", "desestimadas", function (e) {
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
          e.features[0].properties.estado +
          "<br/><br/>" +
          "<b>🔗<a target='_blank' href='" +
          e.features[0].properties.enlace +
          "'> Anteproyecto y EsIA</a></b>" +
          "<br/>" +
          "<b>🔗<a target='_blank'href='" +
          e.features[0].properties.observacio +
          "'> Información adicional (resoluciones, noticias, etc.)</a></b>" +
          "<br/><br/>" +
          "<b>Última revisión: </b>" +
          e.features[0].properties.actualizac
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
