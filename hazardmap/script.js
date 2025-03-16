var map = L.map('map', {
    zoomControl: false
  }).setView([38.682839, 137.759455], 5.5);

  L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
    attribution: '<a href="https://www.gsi.go.jp" target="_blank">地理院タイル</a>'
  }).addTo(map);




  var Overlay_Map = new Array();
  Overlay_Map[ 4 ] = L.tileLayer('https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_data/{z}/{x}/{y}.png', {
    maxNativeZoom: 17,
    attribution: '国土地理院：洪水浸水想定区域（想定最大規模）'
  });
  Overlay_Map[ 5 ] = L.tileLayer('https://disaportaldata.gsi.go.jp/raster/01_flood_l2_keizoku_data/{z}/{x}/{y}.png', {
    maxNativeZoom: 17,
    attribution: '国土地理院：浸水継続時間（想定最大規模）'
  });
  Overlay_Map[ 6 ] = L.tileLayer('https://disaportaldata.gsi.go.jp/raster/03_hightide_l2_shinsuishin_data/{z}/{x}/{y}.png', {
    maxNativeZoom: 17,
    attribution: '国土地理院：高潮浸水想定区域'
  });
  Overlay_Map[ 7 ] = L.tileLayer('https://disaportaldata.gsi.go.jp/raster/04_tsunami_newlegend_data/{z}/{x}/{y}.png', {
    maxNativeZoom: 17,
    attribution: '国土地理院：津波浸水想定'
  });
  Overlay_Map[ 8 ] = L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki/{z}/{x}/{y}.png', {
    maxNativeZoom: 17,
    attribution: '国土地理院：土砂災害警戒区域（土石流）'
  });
  Overlay_Map[ 9 ] = L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki/{z}/{x}/{y}.png', {
    maxNativeZoom: 17,
    attribution: '国土地理院：土砂災害警戒区域（急傾斜地の崩壊）'
  });
  Overlay_Map[ 10 ] = L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki/{z}/{x}/{y}.png', {
   maxNativeZoom: 17,
    attribution: '国土地理院：土砂災害警戒区域（地すべり）'
  });
  var overlay = {
    'ハザードマップ 洪水浸水想定区域': Overlay_Map[ 4 ],
    'ハザードマップ 浸水継続時間': Overlay_Map[ 5 ],
    'ハザードマップ 高潮浸水想定区域': Overlay_Map[ 6 ],
    'ハザードマップ 津波浸水想定': Overlay_Map[ 7 ],
    'ハザードマップ 土石流': Overlay_Map[ 8 ],
    'ハザードマップ 急傾斜地の崩壊': Overlay_Map[ 9 ],
    'ハザードマップ 地すべり': Overlay_Map[ 10 ]
  };
  L.control.layers(overlay).addTo(map);