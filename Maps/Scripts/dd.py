import json
from lxml import etree
from pykml.factory import KML_ElementMaker as KML
from pykml.factory import GX_ElementMaker as GX

# Open the GeoJSON file
with open(r'C:\Users\sunil\Desktop\Electhon-2023\Maps\Datasets\final.geojson', 'r') as f:
    geojson = json.load(f)

# Create a KML document
kml_doc = KML.kml()

# Loop through the features in the GeoJSON file
for feature in geojson['features']:
    # Get the properties and style for the feature
    props = feature['properties']
    style = feature['style']

    # Create a KML placemark
    placemark = KML.Placemark(
        KML.name(props['PS_Name'].strip()),
        KML.description(props['PSCode'].strip() + ' ' + props['voter_turnout'].strip()),
        KML.Style(
            KML.PolyStyle(
                KML.color(style['fill']),
                KML.fill(1),
                KML.outline(1),
            ),
            KML.LineStyle(
                KML.width(style['stroke-width']),
            ),
            id=props['PSCode'].strip(),
        ),
        KML.Polygon(
            KML.outerBoundaryIs(
                KML.LinearRing(
                    KML.coordinates('\n'.join([','.join(map(str, c)) for c in feature['geometry']['coordinates'][0]])),
                ),
            ),
        ),
    )

    # Add the placemark to the KML document
    kml_doc.append(placemark)

# Write the KML document to a file
with open('output.kml', 'w') as f:
    f.write(etree.tostring(kml_doc, pretty_print=True).decode())
