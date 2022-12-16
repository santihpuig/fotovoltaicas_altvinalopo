// Selector capas

var baseMaps = {
  Simple: simple,
  "Simple (negro)": negro,
  Base: outdoors,
  "Fotografía aérea": ortofoto,
  MTN: rasterbtn,
};

L.control
  .layers(baseMaps, null, { collapsed: false, position: "bottomleft" })
  .addTo(map);

var overlayMaps = {
  label: "<b>CAPAS</b>",
  collapsed: false,
  children: [
    {
      label: '<b>Centrales solares <a href="/3D/index.html">Versión 3D</a></b>',
      selectAllCheckbox: true,
      collapsed: false,
      children: [
        {
          label: '<b style="color:#499113">Plantas en funcionamiento</b>',
          layer: enFuncionamiento,
        },
        {
          label:
            '<b style="color:#ff4526">Plantas con informe desfavorable</b>',
          layer: desfavorable,
        },
        {
          label: '<b style="color:#fdcc14">Plantas en aprobación</b>',
          layer: enAprobacion,
        },
        {
          label:
            '<b style="color:#fdcc14">Líneas de alta tensión en aprobación</b>',
          layer: altatension,
        },
        {
          label: '<b style="color:#fdcc14">Líneas de 30kv en aprobación</b>',
          layer: lineas30,
        },
        {
          label:
            '<b style="color:#fdcc14">Subestaciones en fase de aprobación</b>',
          layer: subestaciones,
        },
        {
          label: '<b style="color:#fdcc14">Plantas en trámite en GVA</b>',
          layer: tramiteICV,
        },
      ],
    },
    {
      label:
        'Art. 09 <b><a target="_blank" href="http://www.dogv.gva.es/portal/ficha_disposicion.jsp?L=1&sig=006679%2F2020">DL 14/2020</a></b>',
      selectAllCheckbox: true,
      collapsed: true,
      children: [
        { label: "LIC (Red Natura 2000)", layer: lics },
        { label: "ZEPA (Red Natura 2000)", layer: zepas },
        { label: "ZEC", layer: zec },
        { label: "Zonas húmedas", layer: zhumedas },
        { label: "Montes de Utilidad Pública", layer: montes },
      ],
    },
    {
      label:
        'Art.10 <b><a target="_blank" href="http://www.dogv.gva.es/portal/ficha_disposicion.jsp?L=1&sig=006679%2F2020">DL 14/2020</a></b> (puede tardar en cargar)',
      selectAllCheckbox: true,
      collapsed: true,
      children: [
        { label: "Corredores territoriales", layer: corredoresTerritoriales },
        { label: "BIC distancia 500 m", layer: bicsTodos },
        { label: "Paisajes protegidos", layer: paisajespTodos },
        { label: "Pendientes sup. al 25%", layer: pendientes },
        { label: "Peligro de inundación", layer: pinundacion },
        { label: "Capacidad agrológica", layer: cagrologica },
        { label: "Corredores y cauces fluviales", layer: fluviales },
        { label: "Recarga de acuíferos", layer: acuiferos },
      ],
    },
    {
      label: "Otros elementos de interés",
      selectAllCheckbox: true,
      collapsed: true,
      children: [
        { label: "Terreno forestal estratégico (PATFOR)", layer: forEst },
        { label: "Paisajes de Relevancia Regional (ETCV)", layer: prr },
        { label: "Vías Pecuarias", layer: vpecuarias },
        { label: "Vía Augusta", layer: vaugusta },
        { label: "Recursos paisajísticos (Estudio Paisaje)", layer: recursosp },
        { label: "Fragmentación del paisaje", layer: fragment },
      ],
    },
  ],
};

var seleccionador = new L.Control.Layers.Tree(baseMaps, overlayMaps, {
  collapsed: false,
}).addTo(map);
