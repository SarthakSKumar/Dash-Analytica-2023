import simplekml
import json

# Load GeoJSON file
with open('/Users/onepiece/Documents/Projects/Electhon-2023/Maps/Datasets/precise.geojson') as f:
    data = json.load(f)

# Create KML object
kml = simplekml.Kml()

# Loop over features and create Placemark for each feature
for feature in data['features']:
    # Get coordinates of feature
    coords = feature['geometry']['coordinates'][0]

    # Create LinearRing object from coordinates
    lr = kml.newlinestring(name='')

    # Set coordinates for LinearRing
    lr.coords = coords

    # Set style for LinearRing
    lr.style.linestyle.width = 2
    lr.style.linestyle.color = simplekml.Color.red
    lr.style.polystyle.color = simplekml.Color.changealphaint(100, simplekml.Color.green)

    # Try to get 'name' property from feature, if it exists
    try:
        name = feature['properties']['name']
    except KeyError:
        name = ''

    # Create Placemark with LinearRing and name
    placemark = kml.newpoint(name=name)
    placemark.geometry = lr

# Save KML file
kml.save('output.kml')
