import json
import simplekml

# Load GeoJSON file as a Python dictionary
with open('/Users/onepiece/Documents/Projects/Electhon-2023/Maps/Datasets/final.geojson', 'r') as f:
    data = json.load(f)

# Create a simplekml object and set the styles
kml = simplekml.Kml()
for feature in data['features']:
    if feature['geometry']['type'] == 'Point':
        style = simplekml.Style()
        style.iconstyle.icon.href = 'http://maps.google.com/mapfiles/kml/paddle/red-circle.png'
        kml.newpoint(name=feature['properties']['name'], coords=[(feature['geometry']['coordinates'][0], feature['geometry']['coordinates'][1])], style=style)
    elif feature['geometry']['type'] == 'LineString':
        style = simplekml.Style()
        style.linestyle.color = simplekml.Color.red
        kml.newlinestring(name=feature['properties']['name'], coords=feature['geometry']['coordinates'], style=style)
    elif feature['geometry']['type'] == 'Polygon':
        style = simplekml.Style()
        style.linestyle.color = simplekml.Color.red
        style.polystyle.color = simplekml.Color.changealphaint(100, simplekml.Color.blue)
        kml.newpolygon(name=feature['properties']['name'], outerboundaryis=feature['geometry']['coordinates'][0], innerboundaryis=feature['geometry']['coordinates'][1:], style=style)

# Save the KML file
kml.save('/Users/onepiece/Documents/Projects/Electhon-2023/Maps/Datasets/final.kml')
