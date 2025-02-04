var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_FO_Varela_1 = new ol.format.GeoJSON();
var features_FO_Varela_1 = format_FO_Varela_1.readFeatures(json_FO_Varela_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FO_Varela_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FO_Varela_1.addFeatures(features_FO_Varela_1);
var lyr_FO_Varela_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FO_Varela_1, 
                style: style_FO_Varela_1,
                popuplayertitle: 'FO_Varela',
                interactive: true,
    title: 'FO_Varela<br />\
    <img src="styles/legend/FO_Varela_1_0.png" /> FO12<br />\
    <img src="styles/legend/FO_Varela_1_1.png" /> FO12_Naps<br />\
    <img src="styles/legend/FO_Varela_1_2.png" /> FO24<br />\
    <img src="styles/legend/FO_Varela_1_3.png" /> FO48<br />\
    <img src="styles/legend/FO_Varela_1_4.png" /> <br />'
        });
var format_BotellasNaps_Varela_2 = new ol.format.GeoJSON();
var features_BotellasNaps_Varela_2 = format_BotellasNaps_Varela_2.readFeatures(json_BotellasNaps_Varela_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BotellasNaps_Varela_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BotellasNaps_Varela_2.addFeatures(features_BotellasNaps_Varela_2);
var lyr_BotellasNaps_Varela_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BotellasNaps_Varela_2, 
                style: style_BotellasNaps_Varela_2,
                popuplayertitle: 'Botellas-Naps_Varela',
                interactive: true,
    title: 'Botellas-Naps_Varela<br />\
    <img src="styles/legend/BotellasNaps_Varela_2_0.png" /> Botella<br />\
    <img src="styles/legend/BotellasNaps_Varela_2_1.png" /> Ganancia<br />\
    <img src="styles/legend/BotellasNaps_Varela_2_2.png" /> NAP<br />\
    <img src="styles/legend/BotellasNaps_Varela_2_3.png" /> Nodo<br />\
    <img src="styles/legend/BotellasNaps_Varela_2_4.png" /> <br />'
        });
var format_FO_Brown_3 = new ol.format.GeoJSON();
var features_FO_Brown_3 = format_FO_Brown_3.readFeatures(json_FO_Brown_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FO_Brown_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FO_Brown_3.addFeatures(features_FO_Brown_3);
var lyr_FO_Brown_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FO_Brown_3, 
                style: style_FO_Brown_3,
                popuplayertitle: 'FO_Brown',
                interactive: true,
    title: 'FO_Brown<br />\
    <img src="styles/legend/FO_Brown_3_0.png" /> FO12<br />\
    <img src="styles/legend/FO_Brown_3_1.png" /> FO12_Naps<br />\
    <img src="styles/legend/FO_Brown_3_2.png" /> FO24<br />\
    <img src="styles/legend/FO_Brown_3_3.png" /> FO48<br />\
    <img src="styles/legend/FO_Brown_3_4.png" /> <br />'
        });
var format_BotellasNaps_Brown_4 = new ol.format.GeoJSON();
var features_BotellasNaps_Brown_4 = format_BotellasNaps_Brown_4.readFeatures(json_BotellasNaps_Brown_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BotellasNaps_Brown_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BotellasNaps_Brown_4.addFeatures(features_BotellasNaps_Brown_4);
var lyr_BotellasNaps_Brown_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BotellasNaps_Brown_4, 
                style: style_BotellasNaps_Brown_4,
                popuplayertitle: 'Botellas-Naps_Brown',
                interactive: true,
    title: 'Botellas-Naps_Brown<br />\
    <img src="styles/legend/BotellasNaps_Brown_4_0.png" /> Botella ()<br />\
    <img src="styles/legend/BotellasNaps_Brown_4_1.png" /> Ganancia ()<br />\
    <img src="styles/legend/BotellasNaps_Brown_4_2.png" /> NAP (En Construccion)<br />\
    <img src="styles/legend/BotellasNaps_Brown_4_3.png" /> NAP (No Operativo)<br />\
    <img src="styles/legend/BotellasNaps_Brown_4_4.png" /> NAP (Operativo)<br />\
    <img src="styles/legend/BotellasNaps_Brown_4_5.png" /> NAP (Sin Puertos Libres)<br />\
    <img src="styles/legend/BotellasNaps_Brown_4_6.png" /> Nodo (Ok)<br />\
    <img src="styles/legend/BotellasNaps_Brown_4_7.png" /> <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_FO_Varela_1.setVisible(true);lyr_BotellasNaps_Varela_2.setVisible(true);lyr_FO_Brown_3.setVisible(true);lyr_BotellasNaps_Brown_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_FO_Varela_1,lyr_BotellasNaps_Varela_2,lyr_FO_Brown_3,lyr_BotellasNaps_Brown_4];
lyr_FO_Varela_1.set('fieldAliases', {'Estado': 'Estado', 'Nombre': 'Nombre', 'Info': 'Info', 'Tipo': 'Tipo', });
lyr_BotellasNaps_Varela_2.set('fieldAliases', {'Tipo': 'Tipo', 'Nomencla': 'Nomencla', 'Estado': 'Estado', 'Info': 'Info', });
lyr_FO_Brown_3.set('fieldAliases', {'Tipo': 'Tipo', 'Nombre': 'Nombre', 'Estado': 'Estado', 'Info': 'Info', });
lyr_BotellasNaps_Brown_4.set('fieldAliases', {'Tipo': 'Tipo', 'Estado': 'Estado', 'Nomencla': 'Nomencla', 'Info': 'Info', 'Clasificac': 'Clasificac', });
lyr_FO_Varela_1.set('fieldImages', {'Estado': 'TextEdit', 'Nombre': 'TextEdit', 'Info': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_BotellasNaps_Varela_2.set('fieldImages', {'Tipo': 'TextEdit', 'Nomencla': 'TextEdit', 'Estado': 'TextEdit', 'Info': 'TextEdit', });
lyr_FO_Brown_3.set('fieldImages', {'Tipo': 'TextEdit', 'Nombre': 'TextEdit', 'Estado': 'TextEdit', 'Info': 'TextEdit', });
lyr_BotellasNaps_Brown_4.set('fieldImages', {'Tipo': 'TextEdit', 'Estado': 'TextEdit', 'Nomencla': 'TextEdit', 'Info': 'TextEdit', 'Clasificac': 'TextEdit', });
lyr_FO_Varela_1.set('fieldLabels', {'Estado': 'no label', 'Nombre': 'inline label - visible with data', 'Info': 'no label', 'Tipo': 'no label', });
lyr_BotellasNaps_Varela_2.set('fieldLabels', {'Tipo': 'no label', 'Nomencla': 'inline label - always visible', 'Estado': 'no label', 'Info': 'no label', });
lyr_FO_Brown_3.set('fieldLabels', {'Tipo': 'no label', 'Nombre': 'inline label - visible with data', 'Estado': 'no label', 'Info': 'inline label - always visible', });
lyr_BotellasNaps_Brown_4.set('fieldLabels', {'Tipo': 'no label', 'Estado': 'no label', 'Nomencla': 'inline label - always visible', 'Info': 'no label', 'Clasificac': 'no label', });
lyr_BotellasNaps_Brown_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});