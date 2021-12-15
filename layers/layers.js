var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_villiage_1 = new ol.format.GeoJSON();
var features_villiage_1 = format_villiage_1.readFeatures(json_villiage_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_villiage_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_villiage_1.addFeatures(features_villiage_1);
var lyr_villiage_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_villiage_1, 
                style: style_villiage_1,
                interactive: true,
                title: '<img src="styles/legend/villiage_1.png" /> villiage'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_villiage_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_villiage_1];
lyr_villiage_1.set('fieldAliases', {'自然村名稱': '自然村名稱', });
lyr_villiage_1.set('fieldImages', {'自然村名稱': '', });
lyr_villiage_1.set('fieldLabels', {'自然村名稱': 'inline label', });
lyr_villiage_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});