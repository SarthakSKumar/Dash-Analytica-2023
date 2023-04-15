import json
from fastkml import kml, styles
from shapely.geometry import shape

# Load GeoJSON file
with open(r'C:\Users\sunil\Desktop\Electhon-2023\Maps\Scripts\updated.geojson') as f:
    geojson_data = json.load(f)

# Create KML object
k = kml.KML()


# Create a shared style object for polygons
poly_style = styles.Style()
poly_style.polystyle.color = '7f00ffff'
k.add_style(poly_style)

# Create a KML document and add shared style to it
doc = kml.Document()
doc.add_style(poly_style)

# Loop through each feature in the GeoJSON file and add it to KML
for feature in geojson_data['features']:
    # Convert feature geometry to Shapely object
    geom = shape(feature['geometry'])

    # Create a KML placemark for the feature
    pm = kml.Placemark(name=feature['properties']['AC_Name'], description=feature['properties']['PS_Name'])

    # Set style for the placemark
    pm.styleUrl = '#my_poly_style'

    # Create KML polygon and assign it to the placemark
    kml_geom = kml.Polygon()
    coords = list(geom.exterior.coords)
    kml_geom.outerboundaryis = [(lon, lat) for lat, lon in coords]
    pm.geometry = kml_geom

    # Add the placemark to the KML document
    doc.add_placemark(pm)

# Add the KML document to the KML object
k.append(doc)

# Save the KML file
with open('your_file.kml', 'w') as f:
    f.write(k.to_string())
