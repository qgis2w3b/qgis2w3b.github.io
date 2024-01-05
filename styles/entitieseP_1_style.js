var size = 0;
var placement = 'point';
function categories_entitieseP_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'TEXTO':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(133,182,111,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Level 62':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(125,139,143,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '56':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(145,82,45,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Level 15':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(190,178,151,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '02 N DE NAP':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '00 CANTIDAD MANZANA':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(229,182,54,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '0':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(225,89,137,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_entitieseP_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Layer");
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Text") !== null) {
        labelText = String(feature.get("Text"));
    }
    
var style = categories_entitieseP_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
