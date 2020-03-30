mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaWxlbG91Y2giLCJhIjoiY2s4OWlsOGs4MDdkMjNkcXg5cjRxcXg0YyJ9.qkiPMOpzWodNM2TF0DabfQ';
var bounds = [
    [-83.583984375, -19.84939395842278], //Southwest
    [-67.67578124999999, 0.9667509997666425] //Northest
];

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kamilelouch/ck8b62xpn1eci1jno1w66ies8',
    center: [-74.641, -9.211],
    zoom: 5
    //maxBounds: bounds
});

//Navigation Control

map.addControl(new mapboxgl.NavigationControl(),'top-left');
map.addControl(new mapboxgl.FullscreenControl(),'bottom-left');
// Add geolocate control to the map.
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);

var geojson = {
    "type":"FeatureCollection",
    "features": [
        {

            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-80.6164, -5.2058]
            },
            "properties": {
                "title": "Piura",
                "population":"1 856 809",
                "infected":20,
                "activecases":19,
                "recoverycases":0,
                "deadlycases":1
            }
        },
        {

            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-76.9619,-12.0634]
            },
            "properties": {
                "title": "Lima",
                "population":"9 485 405",
                "infected":639,
                "activecases":509,
                "recoverycases":0,
                "deadlycases":9
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-79.1094,-8.0847]
            },
            "properties":{
                "title":"La Libertad",
                "population":"1 778 080",
                "infected":13,
                "activecases":13,
                "recoverycases":0,
                "deadlycases":0
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-71.9389,-13.5358]
            },
            "properties":{
                "title":"Cuzco",
                "population":"1 205 527",
                "infected":17,
                "activecases":17,
                "recoverycases":0,
                "deadlycases":0
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-79.8281,-6.7875]
            },
            "properties":{
                "title":"Lambayeque",
                "population":"1 197 260",
                "infected":22,
                "activecases":22,
                "recoverycases":0,
                "deadlycases":0
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-71.1469,-16.7875]
            },
            "properties":{
                "title":"Arequipa",
                "population":"1 382 730",
                "infected":15,
                "activecases":15,
                "recoverycases":0,
                "deadlycases":0
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-73.2952, -3.7820]
            },
            "properties":{
                "title":"Loreto",
                "population":"883 510",
                "infected":52,
                "activecases":52,
                "recoverycases":0,
                "deadlycases":0
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-77.1350, -12.0507]
            },
            "properties":{
                "title":"Callao",
                "population":"994 494",
                "infected":29,
                "activecases":29,
                "recoverycases":0,
                "deadlycases":0
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-75.2027, -12.0762]
            },
            "properties":{
                "title":"Junin",
                "population":"1 246 038",
                "infected":13,
                "activecases":13,
                "recoverycases":0,
                "deadlycases":0
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-80.4504, -3.5627]
            },
            "properties":{
                "title":"Tumbes",
                "population":"224 863",
                "infected":8,
                "activecases":8,
                "recoverycases":0,
                "deadlycases":0
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-77.5288, -9.5264]
            },
            "properties":{
                "title":"Ancash",
                "population":"1 083 519",
                "infected":6,
                "activecases":6,
                "recoverycases":0,
                "deadlycases":0
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-75.7287, -14.0666]
            },
            "properties":{
                "title":"Ica",
                "population":"850 765",
                "infected":5,
                "activecases":5,
                "recoverycases":0,
                "deadlycases":0
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[ -76.2437, -9.9235]
            },
            "properties":{
                "title":"Huanuco",
                "population":"721 047",
                "infected":4,
                "activecases":4,
                "recoverycases":0,
                "deadlycases":0
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-76.9743, -6.03131]
            },
            "properties":{
                "title":"San Martin",
                "population":"813 381",
                "infected":3,
                "activecases":3,
                "recoverycases":0,
                "deadlycases":0
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-74.2092, -13.1443]
            },
            "properties":{
                "title":"Ayacucho",
                "population":"616 176",
                "infected":1,
                "activecases":1,
                "recoverycases":0,
                "deadlycases":0
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-78.4880, -7.1496]
            },
            "properties":{
                "title":"Cajamarca",
                "population":"1 341 012",
                "infected":1,
                "activecases":1,
                "recoverycases":0,
                "deadlycases":0
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-69.1918, -12.59477]
            },
            "properties":{
                "title":"Madre de Dios",
                "population":"141 070",
                "infected":1,
                "activecases":1,
                "recoverycases":0,
                "deadlycases":0
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-76.2516, -10.6827]
            },
            "properties":{
                "title":"Pasco",
                "population":"254 065",
                "infected":1,
                "activecases":1,
                "recoverycases":0,
                "deadlycases":0
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[-70.2534, -18.0156]
            },
            "properties":{
                "title":"Tacna",
                "population":"329 332",
                "infected":1,
                "activecases":1,
                "recoverycases":0,
                "deadlycases":0
            }
        }

    ]};

// add markers to map
geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
    var coorner = '<div id="coorner-top-left" class="coorner"></div><div id="coorner-top-right" class="coorner"></div><div id="coorner-bottom-left" class="coorner"></div><div id="coorner-bottom-right" class="coorner"></div>';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(coorner +'<span class="title">&nbsp;&nbsp;'+ marker.properties.title+'</span><br><div class="hr"><hr /><span class="labelInner">&nbsp;&nbsp;Poblacion: '+ marker.properties.population+'</span><br><span class="labelInner">&nbsp;&nbsp;Riesgo: low</span><br><span class="labelInner">&nbsp;&nbsp;Infectados :'+ marker.properties.infected+'</span><br><table cellpadding="0" cellspacing="0"><tbody><tr class="activ"><td class="label">Activos</td><td class="label">'+marker.properties.activecases+'</td></tr><tr class="recover"><td class="label">Curados</td><td class="label">'+marker.properties.recoverycases+'</td></tr><tr class="deadly"><td class="label">Fallecidos</td><td class="label">'+marker.properties.deadlycases+'</td></tr></tbody></table>'))
        .addTo(map);

});


var hoveredStateId = null;

map.on('load', function() {

    map.addSource('location',{
        'type': 'geojson',
            'data':
               'assets/locations.geojson'
    });
    map.addLayer({
        'id':'circle-round',
        'type':'circle',
        'source':'location',
        'paint':{
            'circle-color':[
                'interpolate',['linear'],['get','mag'],6,'#ffffff',8,'#ff0000'],
            'circle-opacity':0.75,
            'circle-radius':['interpolate',
                ['linear'],
                ['get', 'infected'],
                6,
                20,
                8,
                40
            ]

        }
    });
    map.addLayer({
        'id': 'circle-round-labels',
        'type': 'symbol',
        'source': 'location',
        'layout': {
            'text-field': [
                'concat',
                ['to-string', ['get', 'infected']]
            ],
            'text-font': [
                'Open Sans Bold',
                'Arial Unicode MS Bold'
            ],
            'text-size': 12
        },
        'paint': {
            'text-color': 'rgba(255,255,255,0.5)'
        }
    });

    map.addSource('states', {
        'type': 'geojson',
        'data':
            'assets/DEPARTAMENTOS.geojson'
    });

    // The feature-state dependent fill-opacity expression will render the hover effect
    // when a feature's hover state is set to true.
    map.addLayer({
        'id': 'state-fills',
        'type': 'fill',
        'source': 'states',
        'layout': {},
        'paint': {
            'fill-color': '#26363C',
            'fill-opacity': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                1,
                0
            ]
        }
    });

    map.addLayer({
        'id': 'state-borders',
        'type': 'line',
        'source': 'states',
        'layout': {},
        'paint': {
            'line-color': '#006633',
            'line-width': 0
        }
    });
     // When the user moves their mouse over the state-fill layer, we'll update the
     // feature state for the feature under the mouse.
     map.on('mousemove', 'state-fills', function(e) {
     if (e.features.length > 0) {
     if (hoveredStateId) {
     map.setFeatureState(
     { source: 'states', id: hoveredStateId },
     { hover: false }
     );
     }
     hoveredStateId = e.features[0].id;
     map.setFeatureState(
     { source: 'states', id: hoveredStateId },
     { hover: true }
     );
     }
     });

     // When the mouse leaves the state-fill layer, update the feature state of the
     // previously hovered feature.
     map.on('mouseleave', 'state-fills', function() {
     if (hoveredStateId) {
     map.setFeatureState(
     { source: 'states', id: hoveredStateId },
     { hover: false }
     );
     }
     hoveredStateId = null;
     });
// When a click event occurs on a feature in the states layer, open a popup at the
// location of the click, with description HTML from its properties.
    map.on('click','state-fills',function (e) {
        new mapboxgl.Popup()
            .setHTML(e.features[0].properties.name)
            .addTo(map);

    });

});







