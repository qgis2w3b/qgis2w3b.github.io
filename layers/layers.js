var wms_layers = [];

var format_entitieseF_0 = new ol.format.GeoJSON();
var features_entitieseF_0 = format_entitieseF_0.readFeatures(json_entitieseF_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_entitieseF_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitieseF_0.addFeatures(features_entitieseF_0);
var lyr_entitieseF_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_entitieseF_0, 
                style: style_entitieseF_0,
                interactive: true,
    title: 'entitieseF<br />\
    <img src="styles/legend/entitieseF_0_0.png" /> Level 10<br />'
        });
var format_entitieseP_1 = new ol.format.GeoJSON();
var features_entitieseP_1 = format_entitieseP_1.readFeatures(json_entitieseP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_entitieseP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitieseP_1.addFeatures(features_entitieseP_1);
var lyr_entitieseP_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_entitieseP_1, 
                style: style_entitieseP_1,
                interactive: true,
    title: 'entitieseP<br />\
    <img src="styles/legend/entitieseP_1_0.png" /> TEXTO<br />\
    <img src="styles/legend/entitieseP_1_1.png" /> Level 62<br />\
    <img src="styles/legend/entitieseP_1_2.png" /> 56<br />\
    <img src="styles/legend/entitieseP_1_3.png" /> Level 15<br />\
    <img src="styles/legend/entitieseP_1_4.png" /> 02 N DE NAP<br />\
    <img src="styles/legend/entitieseP_1_5.png" /> 00 CANTIDAD MANZANA<br />\
    <img src="styles/legend/entitieseP_1_6.png" /> 0<br />'
        });

        var lyr_EsriStreet_2 = new ol.layer.Tile({
            'title': 'Esri Street',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_entitieseL_3 = new ol.format.GeoJSON();
var features_entitieseL_3 = format_entitieseL_3.readFeatures(json_entitieseL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_entitieseL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitieseL_3.addFeatures(features_entitieseL_3);
var lyr_entitieseL_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_entitieseL_3, 
                style: style_entitieseL_3,
                interactive: false,
    title: 'entitieseL<br />\
    <img src="styles/legend/entitieseL_3_0.png" /> Level 10<br />\
    <img src="styles/legend/entitieseL_3_1.png" /> 02 CAJAS NAP<br />\
    <img src="styles/legend/entitieseL_3_2.png" /> Level 11<br />\
    <img src="styles/legend/entitieseL_3_3.png" /> 02 BOTELLA<br />\
    <img src="styles/legend/entitieseL_3_4.png" /> NAPsPunto<br />\
    <img src="styles/legend/entitieseL_3_5.png" /> Level 12<br />\
    <img src="styles/legend/entitieseL_3_6.png" /> 02 SUR F.O.24 TRONCAL<br />\
    <img src="styles/legend/entitieseL_3_7.png" /> 00 POSTES PROPIOS 9 MTS<br />\
    <img src="styles/legend/entitieseL_3_8.png" /> 02 SUR F.O.12 TRONCAL<br />\
    <img src="styles/legend/entitieseL_3_9.png" /> 00 CANTIDAD MANZANA<br />\
    <img src="styles/legend/entitieseL_3_10.png" /> 0<br />'
        });
var format_CajasNAP_4 = new ol.format.GeoJSON();
var features_CajasNAP_4 = format_CajasNAP_4.readFeatures(json_CajasNAP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CajasNAP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CajasNAP_4.addFeatures(features_CajasNAP_4);
var lyr_CajasNAP_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CajasNAP_4, 
                style: style_CajasNAP_4,
                interactive: false,
                title: '<img src="styles/legend/CajasNAP_4.png" /> Cajas NAP'
            });
var format_CajasNAP_5 = new ol.format.GeoJSON();
var features_CajasNAP_5 = format_CajasNAP_5.readFeatures(json_CajasNAP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CajasNAP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CajasNAP_5.addFeatures(features_CajasNAP_5);
var lyr_CajasNAP_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CajasNAP_5, 
                style: style_CajasNAP_5,
                interactive: true,
                title: '<img src="styles/legend/CajasNAP_5.png" /> Cajas NAP'
            });
var group_CapitanSarmientoMAESTRO3dxf_SHPGCbyKat = new ol.layer.Group({
                                layers: [lyr_entitieseF_0,lyr_entitieseP_1,],
                                title: "Capitan Sarmiento - MAESTRO 3.dxf_SHP(GC-byKat)"});

lyr_entitieseF_0.setVisible(true);lyr_entitieseP_1.setVisible(true);lyr_EsriStreet_2.setVisible(true);lyr_entitieseL_3.setVisible(true);lyr_CajasNAP_4.setVisible(true);lyr_CajasNAP_5.setVisible(true);
var layersList = [group_CapitanSarmientoMAESTRO3dxf_SHPGCbyKat,lyr_EsriStreet_2,lyr_entitieseL_3,lyr_CajasNAP_4,lyr_CajasNAP_5];
lyr_entitieseF_0.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitieseP_1.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitieseL_3.set('fieldAliases', {'Layer': 'Layer', 'SubClasses': 'SubClasses', 'EntityHand': 'EntityHand', 'ogr_style': 'ogr_style', 'color': 'color', });
lyr_CajasNAP_4.set('fieldAliases', {'EntityHand': 'EntityHand', 'Troncal': 'Troncal', 'Subtroncal': 'Subtroncal', 'Vacantes': 'Vacantes', });
lyr_CajasNAP_5.set('fieldAliases', {'IdCajas': 'IdCajas', 'IdAlfa': 'IdAlfa', 'IdAbonado1': 'IdAbonado1', 'IdAbonado2': 'IdAbonado2', 'IdAbonado3': 'IdAbonado3', 'IdAbonado4': 'IdAbonado4', 'IdAbonado5': 'IdAbonado5', 'IdAbonado6': 'IdAbonado6', 'IdAbonado7': 'IdAbonado7', 'IdAbonado8': 'IdAbonado8', });
lyr_entitieseF_0.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitieseP_1.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitieseL_3.set('fieldImages', {'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'EntityHand': 'TextEdit', 'ogr_style': 'TextEdit', 'color': 'TextEdit', });
lyr_CajasNAP_4.set('fieldImages', {'EntityHand': 'TextEdit', 'Troncal': '', 'Subtroncal': '', 'Vacantes': '', });
lyr_CajasNAP_5.set('fieldImages', {'IdCajas': 'TextEdit', 'IdAlfa': 'TextEdit', 'IdAbonado1': '', 'IdAbonado2': '', 'IdAbonado3': '', 'IdAbonado4': '', 'IdAbonado5': '', 'IdAbonado6': '', 'IdAbonado7': '', 'IdAbonado8': '', });
lyr_entitieseF_0.set('fieldLabels', {});
lyr_entitieseP_1.set('fieldLabels', {});
lyr_entitieseL_3.set('fieldLabels', {'Layer': 'no label', 'SubClasses': 'no label', 'EntityHand': 'no label', 'ogr_style': 'no label', 'color': 'no label', });
lyr_CajasNAP_4.set('fieldLabels', {'EntityHand': 'no label', 'Troncal': 'no label', 'Subtroncal': 'no label', 'Vacantes': 'no label', });
lyr_CajasNAP_5.set('fieldLabels', {'IdCajas': 'no label', 'IdAlfa': 'header label', 'IdAbonado1': 'inline label', 'IdAbonado2': 'inline label', 'IdAbonado3': 'inline label', 'IdAbonado4': 'inline label', 'IdAbonado5': 'inline label', 'IdAbonado6': 'inline label', 'IdAbonado7': 'inline label', 'IdAbonado8': 'inline label', });
lyr_CajasNAP_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});