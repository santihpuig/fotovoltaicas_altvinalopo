// Términos municipales
var estiloMunicipios = {
  weight: 0.25,
  color: "black",
  dashArray: "2",
  fillOpacity: 0,
};
var municipios = L.geoJson(municipios, {
  style: estiloMunicipios,
  interactive: false,
}).addTo(map);
// Velo alt vinalopó
var estiloVelo = {
  fillColor: "#ffffff",
  fillOpacity: 0.1,
  stroke: 0,
};
var velo = L.geoJson(velo, {
  style: estiloVelo,
  interactive: false,
}).addTo(map);
// Centrales
// En funcionamiento
function popupFuncionamiento(feature, layer) {
  layer.bindPopup(
    "<b>Nombre: </b>" +
      feature.properties.nombre +
      "<br/>" +
      "<b>Potencia: </b>" +
      feature.properties.potencia +
      "<br/>"
  );
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "black",
      dashArray: "",
      fillOpacity: 0.75,
    });
  }
  function resetHighlight(e) {
    enFuncionamiento.resetStyle(e.target);
  }
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}
var estiloFuncionando = {
  fillColor: "#499113",
  color: "#499113",
  weight: 0.5,
  opacity: 1,
  fillOpacity: 0.5,
};
var enFuncionamiento = L.geoJson(plantas, {
  style: estiloFuncionando,
  onEachFeature: popupFuncionamiento,
  filter: function (feature, layer) {
    return feature.properties.estado == "En funcionamiento";
  },
}).addTo(map);

// Plantas en fase de aprobación
var estiloPlantas = {
  fillColor: "#fdcc14",
  color: "#fdcc14",
  weight: 0.5,
  opacity: 1,
  fillOpacity: 0.5,
};
function popupPlantas(feature, layer) {
  layer.bindPopup(
    "<h3>" +
      feature.properties.nombre +
      "</h3>" +
      "<b>Potencia: </b>" +
      feature.properties.potencia +
      "<br/>" +
      "<b>Superficie: </b>" +
      feature.properties.area +
      " hectáreas <br/>" +
      "<b>Estado: </b>" +
      feature.properties.estado +
      "<br/><br/>" +
      "<b>🔗<a target='_blank' href='" +
      feature.properties.enlace +
      "'> Anteproyecto y EsIA</a></b>" +
      "<br/>" +
      "<b>🔗<a target='_blank'href='" +
      feature.properties.observacio +
      "'> Información adicional (resoluciones, noticias, etc.)</a></b>" +
      "<br/><br/>" +
      "<b>Última revisión: </b>" +
      feature.properties.actualizac
  );
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "black",
      dashArray: "",
      fillOpacity: 0.75,
    });
  }
  function resetHighlight(e) {
    enAprobacion.resetStyle(e.target);
  }
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}
var enAprobacion = L.geoJson(plantas, {
  style: estiloPlantas,
  onEachFeature: popupPlantas,
  filter: function (feature, layer) {
    return feature.properties.estado == "En fase de aprobación";
  },
}).addTo(map);
// Plantas con informe desfavorable
var estiloDesfavorable = {
  fillColor: "#ff4526",
  color: "#ff4526",
  weight: 0.5,
  opacity: 1,
  fillOpacity: 0.5,
};
function popupDesfavorable(feature, layer) {
  layer.bindPopup(
    "<h3>" +
      feature.properties.nombre +
      "</h3>" +
      "<b>Potencia: </b>" +
      feature.properties.potencia +
      "<br/>" +
      "<b>Superficie: </b>" +
      feature.properties.area +
      " hectáreas <br/>" +
      "<b>Estado: </b>" +
      feature.properties.estado +
      "<br/><br/>" +
      "<b>🔗<a target='_blank' href='" +
      feature.properties.enlace +
      "'> Anteproyecto y EsIA</a></b>" +
      "<br/>" +
      "<b>🔗<a target='_blank'href='" +
      feature.properties.observacio +
      "'> Información adicional (resoluciones, noticias, etc.)</a></b>" +
      "<br/><br/>" +
      "<b>Última revisión: </b>" +
      feature.properties.actualizac
  );
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "black",
      dashArray: "",
      fillOpacity: 0.75,
    });
  }
  function resetHighlight(e) {
    desfavorable.resetStyle(e.target);
  }
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}
var desfavorable = L.geoJson(plantas, {
  style: estiloDesfavorable,
  onEachFeature: popupDesfavorable,
  filter: function (feature, layer) {
    return feature.properties.estado == "Informe desfavorable";
  },
}).addTo(map);
// Líneas
// Líneas Alta Tensión
function popupLAT(feature, layer) {
  layer.bindPopup(feature.properties.nombre);
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "black",
      dashArray: "",
      fillOpacity: 0.75,
    });
  }
  function resetHighlight(e) {
    lineasATension.resetStyle(e.target);
  }
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}
var estiloLAT = {
  color: "#fdcc14",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.5,
};
var lineasATension = L.geoJson(lineasAT, {
  style: estiloLAT,
  onEachFeature: popupLAT,
});
// Apoyos líneas Alta Tensión
function estiloApoyos(feature, layer) {
  return {
    radius: 0.5,
    fillColor: "#fdcc14",
    color: "#fdcc14",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.7,
  };
}
var apoyosATension = L.geoJson(apoyoslat, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, estiloApoyos);
  },
  style: estiloApoyos,
  interactive: false,
}).addTo(map);
var altatension = L.layerGroup([lineasATension, apoyosATension]).addTo(map);
// Líneas 30Kv
var estiloL30 = {
  color: "#fdcc14",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.5,
};
var lineas30 = L.geoJson(lineas30kv, {
  style: estiloL30,
  interactive: false,
}).addTo(map);
// Subestaciones
function popupSubestaciones(feature, layer) {
  layer.bindPopup(feature.properties.nombre);
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "black",
      dashArray: "",
      fillOpacity: 0.75,
    });
  }
  function resetHighlight(e) {
    subestaciones.resetStyle(e.target);
  }
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}
function estiloSubestaciones(feature, layer) {
  return {
    radius: 4,
    fillColor: "#fdcc14",
    color: "#fdcc14",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.7,
  };
}
var subestaciones = L.geoJson(subestaciones, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, estiloSubestaciones);
  },
  style: estiloSubestaciones,
  onEachFeature: popupSubestaciones,
}).addTo(map);
// ICV
var tramiteValladoOtras = L.tileLayer.wms(
  "https://terramapas.icv.gva.es/2601_Fotovoltaicas?service=wms&request=getcapabilities",
  {
    layers: "Vallado_otras_AAPP",
    format: "image/png",
    transparent: true,
    attribution: "Plantas en trámite: Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
var tramiteValladoGVA = L.tileLayer.wms(
  "https://terramapas.icv.gva.es/2601_Fotovoltaicas?service=wms&request=getcapabilities",
  {
    layers: "Vallado_GVA",
    format: "image/png",
    transparent: true,
    attribution: "Plantas en trámite: Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
var tramiteLineasOtras = L.tileLayer.wms(
  "http://carto.icv.gva.es/arcgis/services/tm_industria/energias_renovables_fotov_criterios/MapServer/WMSServer?",
  {
    layers: "Lineas_evacuación_otras_AAPP",
    format: "image/png",
    transparent: true,
    attribution: "Plantas en trámite: Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
var tramiteLineasGVA = L.tileLayer.wms(
  "http://carto.icv.gva.es/arcgis/services/tm_industria/energias_renovables_fotov_criterios/MapServer/WMSServer?",
  {
    layers: "Lineas_evacuación_GVA",
    format: "image/png",
    transparent: true,
    attribution: "Plantas en trámite: Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
var tramiteSubestacionesOtras = L.tileLayer.wms(
  "http://carto.icv.gva.es/arcgis/services/tm_industria/energias_renovables_fotov_criterios/MapServer/WMSServer?",
  {
    layers: "Subestaciones_electricas_otras_AAPP",
    format: "image/png",
    transparent: true,
    attribution: "Plantas en trámite: Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
var tramiteSubestacionesGVA = L.tileLayer.wms(
  "http://carto.icv.gva.es/arcgis/services/tm_industria/energias_renovables_fotov_criterios/MapServer/WMSServer?",
  {
    layers: "Subestaciones_electricas_GVA",
    format: "image/png",
    transparent: true,
    attribution: "Plantas en trámite: Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
var tramiteICV = L.layerGroup([
  tramiteValladoOtras,
  tramiteValladoGVA,
  tramiteLineasOtras,
  tramiteLineasGVA,
  tramiteSubestacionesOtras,
  tramiteSubestacionesGVA,
]);
// ARTÍCULO 9
// LICS
function popupLics(feature, layer) {
  layer.bindPopup(
    "<b>Nombre: </b>" +
      feature.properties.NOMBRE +
      "<br/>" +
      "<b>Código: </b>" +
      feature.properties.SITE_CODE +
      "<br/>" +
      "<b>Normas gestión: </b>" +
      feature.properties.NORMAS +
      "<br/>"
  );
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "black",
      dashArray: "",
      fillOpacity: 0.75,
    });
  }
  function resetHighlight(e) {
    lics.resetStyle(e.target);
  }
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}
var estiloLics = {
  fillColor: "#43aa8b",
  color: "#43aa8b",
  weight: 0.5,
  opacity: 1,
  fillOpacity: 0.5,
};
var lics = L.geoJson(lics, {
  style: estiloLics,
  onEachFeature: popupLics,
});
// ZEPAS
function popupZepas(feature, layer) {
  layer.bindPopup(
    "<b>Nombre: </b>" +
      feature.properties.NOMBRE +
      "<br/>" +
      "<b>Código: </b>" +
      feature.properties.SITE_CODE +
      "<br/>" +
      "<b>Normas gestión: </b>" +
      feature.properties.NORMAS +
      "<br/>"
  );
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "black",
      dashArray: "",
      fillOpacity: 0.75,
    });
  }
  function resetHighlight(e) {
    zepas.resetStyle(e.target);
  }
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}
var estiloZepas = {
  fillColor: "#4d908e",
  color: "#4d908e",
  weight: 0.5,
  opacity: 1,
  fillOpacity: 0.5,
};
var zepas = L.geoJson(zepas, {
  style: estiloZepas,
  onEachFeature: popupZepas,
});
// ZECS
function popupZec(feature, layer) {
  layer.bindPopup(
    "<b>Nombre: </b>" +
      feature.properties.nombre +
      "<br/>" +
      "<b>Código: </b>" +
      feature.properties.codigo +
      "<br/>" +
      "<b><a href='" +
      feature.properties.urldoc +
      "'>Normas de gestión</a></b>"
  );
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "black",
      dashArray: "",
      fillOpacity: 0.75,
    });
  }
  function resetHighlight(e) {
    zec.resetStyle(e.target);
  }
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}
var estiloZec = {
  fillColor: "#577590",
  color: "#577590",
  weight: 0.5,
  opacity: 1,
  fillOpacity: 0.5,
};
var zec = L.geoJson(zec, {
  style: estiloZec,
  onEachFeature: popupZec,
});
// Zonas húmedas
function popupZhumedas(feature, layer) {
  layer.bindPopup("<b>Nombre: </b>" + feature.properties.NOMBRE + "<br/>");
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "black",
      dashArray: "",
      fillOpacity: 0.75,
    });
  }
  function resetHighlight(e) {
    zhumedas.resetStyle(e.target);
  }
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}
var estiloZhumedas = {
  fillColor: "#277da1",
  color: "#277da1",
  weight: 0.5,
  opacity: 1,
  fillOpacity: 0.5,
};
var zhumedas = L.geoJson(zhumedas, {
  style: estiloZhumedas,
  onEachFeature: popupZhumedas,
});
// Montes de Utilidad Pública
function popupMontes(feature, layer) {
  layer.bindPopup("Monte de Utilidad Pública");
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "black",
      dashArray: "",
      fillOpacity: 0.75,
    });
  }
  function resetHighlight(e) {
    montes.resetStyle(e.target);
  }
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}
var estiloMontes = {
  fillColor: "#90be6d",
  color: "#90be6d",
  weight: 0.5,
  opacity: 1,
  fillOpacity: 0.5,
};
var montes = L.geoJson(montes, {
  style: estiloMontes,
  onEachFeature: popupMontes,
});
// Artículo 10
// Corredores territoriales
var corredoresTerritoriales = L.tileLayer.wms(
  "http://carto.icv.gva.es/arcgis/services/tm_industria/energias_renovables_fotov_criterios/MapServer/WMSServer?",
  {
    layers: "21",
    format: "image/png",
    transparent: true,
    attribution: "Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
// BICS + BICS distancia 500m
var bics = L.tileLayer.wms(
  "http://carto.icv.gva.es/arcgis/services/tm_industria/energias_renovables_fotov_criterios/MapServer/WMSServer?",
  {
    layers: "18",
    format: "image/png",
    transparent: true,
    attribution: "Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
var bics500 = L.tileLayer.wms(
  "http://carto.icv.gva.es/arcgis/services/tm_industria/energias_renovables_fotov_criterios/MapServer/WMSServer?",
  {
    layers: "19",
    format: "image/png",
    transparent: true,
    attribution: "Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
var bicsTodos = L.layerGroup([bics, bics500]);
// Paisajes protegidos + paisajes protegidos distancia 500 m.
var paisajesp = L.tileLayer.wms(
  "http://carto.icv.gva.es/arcgis/services/tm_industria/energias_renovables_fotov_criterios/MapServer/WMSServer?",
  {
    layers: "14",
    format: "image/png",
    transparent: true,
    attribution: "Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
var paisajesp500 = L.tileLayer.wms(
  "http://carto.icv.gva.es/arcgis/services/tm_industria/energias_renovables_fotov_criterios/MapServer/WMSServer?",
  {
    layers: "15",
    format: "image/png",
    transparent: true,
    attribution: "Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
var paisajespTodos = L.layerGroup([paisajesp, paisajesp500]);
// Pendientes superiores al 25%
var pendientes = L.tileLayer.wms(
  "http://carto.icv.gva.es/arcgis/services/tm_industria/energias_renovables_fotov_criterios/MapServer/WMSServer?",
  {
    layers: "12",
    format: "image/png",
    transparent: true,
    attribution: "Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
// Peligro de inundación
var pinundacion = L.tileLayer.wms(
  "http://carto.icv.gva.es/arcgis/services/tm_industria/energias_renovables_fotov_criterios/MapServer/WMSServer?",
  {
    layers: "10",
    format: "image/png",
    transparent: true,
    attribution: "Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
// Capacidad agrológica
var cagrologica = L.tileLayer.wms(
  "http://carto.icv.gva.es/arcgis/services/tm_industria/energias_renovables_fotov_criterios/MapServer/WMSServer?",
  {
    layers: "8",
    format: "image/png",
    transparent: true,
    opacity: 0.5,
    attribution: "Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
// Fluviales
var fluvialTerritorial = L.tileLayer.wms(
  "http://carto.icv.gva.es/arcgis/services/tm_industria/energias_renovables_fotov_criterios/MapServer/WMSServer?",
  {
    layers: "4",
    format: "image/png",
    transparent: true,
    attribution: "Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
var fluvialTerritorial100 = L.tileLayer.wms(
  "http://carto.icv.gva.es/arcgis/services/tm_industria/energias_renovables_fotov_criterios/MapServer/WMSServer?",
  {
    layers: "",
    format: "image/png",
    transparent: true,
    attribution: "Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
var fluvialCauce = L.tileLayer.wms(
  "http://carto.icv.gva.es/arcgis/services/tm_industria/energias_renovables_fotov_criterios/MapServer/WMSServer?",
  {
    layers: "6",
    format: "image/png",
    transparent: true,
    attribution: "Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
var fluvialCauce50 = L.tileLayer.wms(
  "http://carto.icv.gva.es/arcgis/services/tm_industria/energias_renovables_fotov_criterios/MapServer/WMSServer?",
  {
    layers: "4",
    format: "image/png",
    transparent: true,
    attribution: "Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
var fluviales = L.layerGroup([
  fluvialTerritorial,
  fluvialTerritorial100,
  fluvialCauce,
  fluvialCauce50,
]);
// Recarga de acuíferos
var acuiferos = L.tileLayer.wms(
  "http://carto.icv.gva.es/arcgis/services/tm_industria/energias_renovables_fotov_criterios/MapServer/WMSServer?",
  {
    layers: "2",
    format: "image/png",
    transparent: true,
    attribution: "Conselleria Politica Territorial | ICV",
    minZoom: 1,
    maxZoom: 21,
  }
);
// OTROS
// Terreno forestal estratégico
var estiloForEst = {
  fillColor: "#ABC166",
  color: "#ABC166",
  weight: 0,
  opacity: 1,
  fillOpacity: 0.5,
};
var forEst = L.geoJson(forEst, {
  style: estiloForEst,
  interactive: false,
});
// Paisajes de relevancia regional
function popupPrr(feature, layer) {
  layer.bindPopup(
    "<b>Nombre: </b>" +
      feature.properties.nombre_prr +
      "<br/><b>Conjunto: </b>" +
      feature.properties.conjuntos
  );
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "black",
      dashArray: "",
      fillOpacity: 0.75,
    });
  }
  function resetHighlight(e) {
    prr.resetStyle(e.target);
  }
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}
var estiloPrr = {
  fillColor: "#E2B548",
  color: "#E2B548",
  weight: 0.5,
  opacity: 1,
  fillOpacity: 0.5,
};
var prr = L.geoJson(prr, {
  style: estiloPrr,
  onEachFeature: popupPrr,
});
// Vías pecuarias
function popupVpecuarias(feature, layer) {
  layer.bindPopup(feature.properties.FORESTA_22);
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "black",
      dashArray: "",
      fillOpacity: 0.75,
    });
  }
  function resetHighlight(e) {
    vpecuarias.resetStyle(e.target);
  }
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}
var estiloVpecuarias = {
  color: "#CDA541",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.5,
};
var vpecuarias = L.geoJson(vpecuarias, {
  style: estiloVpecuarias,
  onEachFeature: popupVpecuarias,
});
// Vía augusta
function popupVaugusta(feature, layer) {
  layer.bindPopup("Vía Augusta");
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "black",
      dashArray: "",
      fillOpacity: 0.75,
    });
  }
  function resetHighlight(e) {
    vaugusta.resetStyle(e.target);
  }
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}
var estiloVaugusta = {
  color: "#BA963B",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.5,
};
var vaugusta = L.geoJson(vaugusta, {
  style: estiloVaugusta,
  onEachFeature: popupVaugusta,
});
// Recursos paisajísticos
function popupRecursosp(feature, layer) {
  layer.bindPopup(feature.properties.Nombre);
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "black",
      dashArray: "",
      fillOpacity: 0.75,
    });
  }
  function resetHighlight(e) {
    recursosp.resetStyle(e.target);
  }
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}
function estiloRecursosp(feature, layer) {
  return {
    radius: 3,
    fillColor: "#F9C74F",
    color: "#F9C74F",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.7,
  };
}
var recursosp = L.geoJson(recursosp, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, estiloRecursosp);
  },
  style: estiloRecursosp,
  onEachFeature: popupRecursosp,
});
// Fragmentación del paisaje
// Paisajes de relevancia regional
function popupFragment(feature, layer) {
  layer.bindPopup("<b>Coherencia: </b>" + feature.properties.COH);
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "black",
      dashArray: "",
      fillOpacity: 0.75,
    });
  }
  function resetHighlight(e) {
    fragment.resetStyle(e.target);
  }
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}
function getColor(d) {
  return d > 0.75
    ? "#90BE6D"
    : d > 0.5
    ? "#ABCE91"
    : d > 0.25
    ? "#F9C74F"
    : d > 0
    ? "#f94144"
    : "#E2E2E2";
}
function estiloFragment(feature) {
  return {
    fillColor: getColor(feature.properties.COH),
    weight: 0.5,
    color: "#E2B548",
    color: "white",
    opacity: 1,
    fillOpacity: 0.75,
  };
}
var fragment = L.geoJson(fragment, {
  style: estiloFragment,
  onEachFeature: popupFragment,
});
