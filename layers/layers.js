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

        var lyr_Argenmap_0 = new ol.layer.Tile({
            'title': 'Argenmap',
        var lyr_EsriStreet_2 = new ol.layer.Tile({
            'title': 'Esri Street',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Calles_1 = new ol.format.GeoJSON();
var features_Calles_1 = format_Calles_1.readFeatures(json_Calles_1, 
var format_entitieseL_3 = new ol.format.GeoJSON();
var features_entitieseL_3 = format_entitieseL_3.readFeatures(json_entitieseL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_entitieseL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Calles_1.addFeatures(features_Calles_1);
var lyr_Calles_1 = new ol.layer.Vector({
jsonSource_entitieseL_3.addFeatures(features_entitieseL_3);
var lyr_entitieseL_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Calles_1, 
                style: style_Calles_1,
                interactive: true,
                title: '<img src="styles/legend/Calles_1.png" /> Calles'
            });
var format_CapitanSarmientoCatastroIdeba_2 = new ol.format.GeoJSON();
var features_CapitanSarmientoCatastroIdeba_2 = format_CapitanSarmientoCatastroIdeba_2.readFeatures(json_CapitanSarmientoCatastroIdeba_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapitanSarmientoCatastroIdeba_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapitanSarmientoCatastroIdeba_2.addFeatures(features_CapitanSarmientoCatastroIdeba_2);
var lyr_CapitanSarmientoCatastroIdeba_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CapitanSarmientoCatastroIdeba_2, 
                style: style_CapitanSarmientoCatastroIdeba_2,
                interactive: true,
                title: '<img src="styles/legend/CapitanSarmientoCatastroIdeba_2.png" /> Capitan Sarmiento Catastro Ideba'
            });
var format_FOTrianguloSur_3 = new ol.format.GeoJSON();
var features_FOTrianguloSur_3 = format_FOTrianguloSur_3.readFeatures(json_FOTrianguloSur_3, 
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
var jsonSource_FOTrianguloSur_3 = new ol.source.Vector({
var jsonSource_CajasNAP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOTrianguloSur_3.addFeatures(features_FOTrianguloSur_3);
jsonSource_CajasNAP_4.addFeatures(features_CajasNAP_4);
var lyr_CajasNAP_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FOTrianguloSur_3, 
                style: style_FOTrianguloSur_3,
                interactive: true,
                title: '<img src="styles/legend/FOTrianguloSur_3.png" /> FO Triangulo Sur'
                source:jsonSource_CajasNAP_4, 
                style: style_CajasNAP_4,
                interactive: false,
                title: '<img src="styles/legend/CajasNAP_4.png" /> Cajas NAP'
            });
var format_NAPsTrianguloSur_4 = new ol.format.GeoJSON();
var features_NAPsTrianguloSur_4 = format_NAPsTrianguloSur_4.readFeatures(json_NAPsTrianguloSur_4, 
var format_CajasNAP_5 = new ol.format.GeoJSON();
var features_CajasNAP_5 = format_CajasNAP_5.readFeatures(json_CajasNAP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAPsTrianguloSur_4 = new ol.source.Vector({
var jsonSource_CajasNAP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAPsTrianguloSur_4.addFeatures(features_NAPsTrianguloSur_4);
var lyr_NAPsTrianguloSur_4 = new ol.layer.Vector({
jsonSource_CajasNAP_5.addFeatures(features_CajasNAP_5);
var lyr_CajasNAP_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NAPsTrianguloSur_4, 
                style: style_NAPsTrianguloSur_4,
                source:jsonSource_CajasNAP_5, 
                style: style_CajasNAP_5,
                interactive: true,
                title: '<img src="styles/legend/NAPsTrianguloSur_4.png" /> NAPs Triangulo Sur'
                title: '<img src="styles/legend/CajasNAP_5.png" /> Cajas NAP'
            });
var group_CapitanSarmientoMAESTRO3dxf_SHPGCbyKat = new ol.layer.Group({
                                layers: [lyr_entitieseF_0,lyr_entitieseP_1,],
                                title: "Capitan Sarmiento - MAESTRO 3.dxf_SHP(GC-byKat)"});

lyr_Argenmap_0.setVisible(true);lyr_Calles_1.setVisible(true);lyr_CapitanSarmientoCatastroIdeba_2.setVisible(true);lyr_FOTrianguloSur_3.setVisible(true);lyr_NAPsTrianguloSur_4.setVisible(true);
var layersList = [lyr_Argenmap_0,lyr_Calles_1,lyr_CapitanSarmientoCatastroIdeba_2,lyr_FOTrianguloSur_3,lyr_NAPsTrianguloSur_4];
lyr_Calles_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'constructi': 'constructi', 'natural': 'natural', 'lane_marki': 'lane_marki', 'wires': 'wires', 'voltage': 'voltage', 'frequency': 'frequency', 'cables': 'cables', 'maxweight': 'maxweight', 'railway_tr': 'railway_tr', 'boat': 'boat', 'cutting': 'cutting', 'substation': 'substation', 'power': 'power', 'barrier': 'barrier', 'traffic_ca': 'traffic_ca', 'access': 'access', 'maxspeed_h': 'maxspeed_h', 'maxspeed_1': 'maxspeed_1', 'maxspeed_b': 'maxspeed_b', 'maxspeed_2': 'maxspeed_2', 'covered': 'covered', 'tunnel': 'tunnel', 'service': 'service', 'deelectrif': 'deelectrif', 'deelectr_1': 'deelectr_1', 'deelectr_2': 'deelectr_2', 'deelectr_3': 'deelectr_3', 'old_ref': 'old_ref', 'turn_lanes': 'turn_lanes', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'name_en': 'name_en', 'maxheight': 'maxheight', 'boundary': 'boundary', 'admin_leve': 'admin_leve', 'waterway': 'waterway', 'maxspeed_t': 'maxspeed_t', 'horse': 'horse', 'bicycle': 'bicycle', 'maxspeed_f': 'maxspeed_f', 'maxspeed_3': 'maxspeed_3', 'incline': 'incline', 'proposed': 'proposed', 'maxspeed_4': 'maxspeed_4', 'maxspeed_5': 'maxspeed_5', 'bridge_nam': 'bridge_nam', 'motorroad': 'motorroad', 'sidewalk': 'sidewalk', 'shoulder': 'shoulder', 'lit': 'lit', 'foot': 'foot', 'destinatio': 'destinatio', 'alt_name': 'alt_name', 'opening_da': 'opening_da', 'descriptio': 'descriptio', 'junction': 'junction', 'destinat_1': 'destinat_1', 'usage': 'usage', 'short_name': 'short_name', 'railway_pr': 'railway_pr', 'railway': 'railway', 'proposed_v': 'proposed_v', 'proposed_f': 'proposed_f', 'proposed_e': 'proposed_e', 'proposed_1': 'proposed_1', 'passenger_': 'passenger_', 'operator': 'operator', 'official_n': 'official_n', 'network': 'network', 'gauge': 'gauge', 'electrifie': 'electrifie', 'layer': 'layer', 'bridge': 'bridge', 'destinat_2': 'destinat_2', 'embankment': 'embankment', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'highway': 'highway', });
lyr_CapitanSarmientoCatastroIdeba_2.set('fieldAliases', {'CCA': 'CCA', 'TPA': 'TPA', 'ARA1': 'ARA1', 'SAG': 'SAG', 'PDA': 'PDA', });
lyr_FOTrianguloSur_3.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_NAPsTrianguloSur_4.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'olinetype': 'olinetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_Calles_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'constructi': 'TextEdit', 'natural': 'TextEdit', 'lane_marki': 'TextEdit', 'wires': 'TextEdit', 'voltage': 'TextEdit', 'frequency': 'TextEdit', 'cables': 'TextEdit', 'maxweight': 'TextEdit', 'railway_tr': 'TextEdit', 'boat': 'TextEdit', 'cutting': 'TextEdit', 'substation': 'TextEdit', 'power': 'TextEdit', 'barrier': 'TextEdit', 'traffic_ca': 'TextEdit', 'access': 'TextEdit', 'maxspeed_h': 'TextEdit', 'maxspeed_1': 'TextEdit', 'maxspeed_b': 'TextEdit', 'maxspeed_2': 'TextEdit', 'covered': 'TextEdit', 'tunnel': 'TextEdit', 'service': 'TextEdit', 'deelectrif': 'TextEdit', 'deelectr_1': 'TextEdit', 'deelectr_2': 'TextEdit', 'deelectr_3': 'TextEdit', 'old_ref': 'TextEdit', 'turn_lanes': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'name_en': 'TextEdit', 'maxheight': 'TextEdit', 'boundary': 'TextEdit', 'admin_leve': 'TextEdit', 'waterway': 'TextEdit', 'maxspeed_t': 'TextEdit', 'horse': 'TextEdit', 'bicycle': 'TextEdit', 'maxspeed_f': 'TextEdit', 'maxspeed_3': 'TextEdit', 'incline': 'TextEdit', 'proposed': 'TextEdit', 'maxspeed_4': 'TextEdit', 'maxspeed_5': 'TextEdit', 'bridge_nam': 'TextEdit', 'motorroad': 'TextEdit', 'sidewalk': 'TextEdit', 'shoulder': 'TextEdit', 'lit': 'TextEdit', 'foot': 'TextEdit', 'destinatio': 'TextEdit', 'alt_name': 'TextEdit', 'opening_da': 'TextEdit', 'descriptio': 'TextEdit', 'junction': 'TextEdit', 'destinat_1': 'TextEdit', 'usage': 'TextEdit', 'short_name': 'TextEdit', 'railway_pr': 'TextEdit', 'railway': 'TextEdit', 'proposed_v': 'TextEdit', 'proposed_f': 'TextEdit', 'proposed_e': 'TextEdit', 'proposed_1': 'TextEdit', 'passenger_': 'TextEdit', 'operator': 'TextEdit', 'official_n': 'TextEdit', 'network': 'TextEdit', 'gauge': 'TextEdit', 'electrifie': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'destinat_2': 'TextEdit', 'embankment': 'TextEdit', 'surface': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes': 'TextEdit', 'highway': 'TextEdit', });
lyr_CapitanSarmientoCatastroIdeba_2.set('fieldImages', {'CCA': 'TextEdit', 'TPA': 'TextEdit', 'ARA1': 'TextEdit', 'SAG': 'TextEdit', 'PDA': 'TextEdit', });
lyr_FOTrianguloSur_3.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_NAPsTrianguloSur_4.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'olinetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_Calles_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'constructi': 'no label', 'natural': 'no label', 'lane_marki': 'no label', 'wires': 'no label', 'voltage': 'no label', 'frequency': 'no label', 'cables': 'no label', 'maxweight': 'no label', 'railway_tr': 'no label', 'boat': 'no label', 'cutting': 'no label', 'substation': 'no label', 'power': 'no label', 'barrier': 'no label', 'traffic_ca': 'no label', 'access': 'no label', 'maxspeed_h': 'no label', 'maxspeed_1': 'no label', 'maxspeed_b': 'no label', 'maxspeed_2': 'no label', 'covered': 'no label', 'tunnel': 'no label', 'service': 'no label', 'deelectrif': 'no label', 'deelectr_1': 'no label', 'deelectr_2': 'no label', 'deelectr_3': 'no label', 'old_ref': 'no label', 'turn_lanes': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'name_en': 'no label', 'maxheight': 'no label', 'boundary': 'no label', 'admin_leve': 'no label', 'waterway': 'no label', 'maxspeed_t': 'no label', 'horse': 'no label', 'bicycle': 'no label', 'maxspeed_f': 'no label', 'maxspeed_3': 'no label', 'incline': 'no label', 'proposed': 'no label', 'maxspeed_4': 'no label', 'maxspeed_5': 'no label', 'bridge_nam': 'no label', 'motorroad': 'no label', 'sidewalk': 'no label', 'shoulder': 'no label', 'lit': 'no label', 'foot': 'no label', 'destinatio': 'no label', 'alt_name': 'no label', 'opening_da': 'no label', 'descriptio': 'no label', 'junction': 'no label', 'destinat_1': 'no label', 'usage': 'no label', 'short_name': 'no label', 'railway_pr': 'no label', 'railway': 'no label', 'proposed_v': 'no label', 'proposed_f': 'no label', 'proposed_e': 'no label', 'proposed_1': 'no label', 'passenger_': 'no label', 'operator': 'no label', 'official_n': 'no label', 'network': 'no label', 'gauge': 'no label', 'electrifie': 'no label', 'layer': 'no label', 'bridge': 'no label', 'destinat_2': 'no label', 'embankment': 'no label', 'surface': 'no label', 'ref': 'no label', 'oneway': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'highway': 'no label', });
lyr_CapitanSarmientoCatastroIdeba_2.set('fieldLabels', {'CCA': 'no label', 'TPA': 'no label', 'ARA1': 'no label', 'SAG': 'no label', 'PDA': 'no label', });
lyr_FOTrianguloSur_3.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_NAPsTrianguloSur_4.set('fieldLabels', {'fid': 'header label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'olinetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_NAPsTrianguloSur_4.on('precompose', function(evt) {
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