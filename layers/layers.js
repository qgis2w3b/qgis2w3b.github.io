var wms_layers = [];


        var lyr_Argenmap_0 = new ol.layer.Tile({
            'title': 'Argenmap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_TendidoFO_1 = new ol.format.GeoJSON();
var features_TendidoFO_1 = format_TendidoFO_1.readFeatures(json_TendidoFO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TendidoFO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TendidoFO_1.addFeatures(features_TendidoFO_1);
var lyr_TendidoFO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TendidoFO_1, 
                style: style_TendidoFO_1,
                interactive: true,
                title: '<img src="styles/legend/TendidoFO_1.png" /> Tendido FO'
            });
var format_Sectores_2 = new ol.format.GeoJSON();
var features_Sectores_2 = format_Sectores_2.readFeatures(json_Sectores_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sectores_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sectores_2.addFeatures(features_Sectores_2);
var lyr_Sectores_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sectores_2, 
                style: style_Sectores_2,
                interactive: true,
    title: 'Sectores<br />\
    <img src="styles/legend/Sectores_2_0.png" /> SECTOR 1<br />\
    <img src="styles/legend/Sectores_2_1.png" /> SECTOR 2<br />\
    <img src="styles/legend/Sectores_2_2.png" /> SECTOR 3<br />\
    <img src="styles/legend/Sectores_2_3.png" /> SECTOR 4<br />\
    <img src="styles/legend/Sectores_2_4.png" /> SECTOR 5<br />\
    <img src="styles/legend/Sectores_2_5.png" /> SECTOR 6<br />'
        });
var format_NumeracinCoord4326_3 = new ol.format.GeoJSON();
var features_NumeracinCoord4326_3 = format_NumeracinCoord4326_3.readFeatures(json_NumeracinCoord4326_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NumeracinCoord4326_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NumeracinCoord4326_3.addFeatures(features_NumeracinCoord4326_3);
var lyr_NumeracinCoord4326_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NumeracinCoord4326_3, 
                style: style_NumeracinCoord4326_3,
                interactive: true,
                title: '<img src="styles/legend/NumeracinCoord4326_3.png" /> Numeración Coord.4326'
            });

lyr_Argenmap_0.setVisible(true);lyr_TendidoFO_1.setVisible(true);lyr_Sectores_2.setVisible(true);lyr_NumeracinCoord4326_3.setVisible(true);
var layersList = [lyr_Argenmap_0,lyr_TendidoFO_1,lyr_Sectores_2,lyr_NumeracinCoord4326_3];
lyr_TendidoFO_1.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_Sectores_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_NumeracinCoord4326_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', 'Centro': 'Centro', });
lyr_TendidoFO_1.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'ogr_style': 'TextEdit', 'font': 'TextEdit', 'angle': 'TextEdit', 'size': 'TextEdit', 'size_u': 'TextEdit', 'anchor': 'TextEdit', 'color': 'TextEdit', 'underline': 'Range', 'plaintext': 'TextEdit', 'fcolor': 'TextEdit', 'flnum': 'Range', 'bold': 'Range', 'italic': 'Range', 'dx': 'TextEdit', 'dx_u': 'TextEdit', 'dy': 'TextEdit', 'dy_u': 'TextEdit', });
lyr_Sectores_2.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'ogr_style': 'TextEdit', 'font': 'TextEdit', 'angle': 'TextEdit', 'size': 'TextEdit', 'size_u': 'TextEdit', 'anchor': 'TextEdit', 'color': 'TextEdit', 'underline': 'Range', 'plaintext': 'TextEdit', 'fcolor': 'TextEdit', 'flnum': 'Range', 'bold': 'Range', 'italic': 'Range', 'dx': 'TextEdit', 'dx_u': 'TextEdit', 'dy': 'TextEdit', 'dy_u': 'TextEdit', });
lyr_NumeracinCoord4326_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'ogr_style': 'TextEdit', 'font': 'TextEdit', 'angle': 'TextEdit', 'size': 'TextEdit', 'size_u': 'TextEdit', 'anchor': 'TextEdit', 'color': 'TextEdit', 'underline': 'Range', 'plaintext': 'TextEdit', 'fcolor': 'TextEdit', 'flnum': 'Range', 'bold': 'Range', 'italic': 'Range', 'dx': 'TextEdit', 'dx_u': 'TextEdit', 'dy': 'TextEdit', 'dy_u': 'TextEdit', 'Centro': 'TextEdit', });
lyr_TendidoFO_1.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_Sectores_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_NumeracinCoord4326_3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'inline label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', 'Centro': 'no label', });
lyr_NumeracinCoord4326_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});