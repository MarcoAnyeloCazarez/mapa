var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_isoyt1mgw_1 = new ol.format.GeoJSON();
var features_isoyt1mgw_1 = format_isoyt1mgw_1.readFeatures(json_isoyt1mgw_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isoyt1mgw_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isoyt1mgw_1.addFeatures(features_isoyt1mgw_1);
var lyr_isoyt1mgw_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_isoyt1mgw_1, 
                style: style_isoyt1mgw_1,
                popuplayertitle: "isoyt1mgw",
                interactive: true,
                title: '<img src="styles/legend/isoyt1mgw_1.png" /> isoyt1mgw'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_isoyt1mgw_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_isoyt1mgw_1];
lyr_isoyt1mgw_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'AP1': 'AP1', 'PRECI_RANG': 'PRECI_RANG', });
lyr_isoyt1mgw_1.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'COV_': '', 'COV_ID': '', 'AP1': '', 'PRECI_RANG': '', });
lyr_isoyt1mgw_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'AP1': 'no label', 'PRECI_RANG': 'no label', });
lyr_isoyt1mgw_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});