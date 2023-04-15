import geojson2kml
import json

# read in the GeoJSON file
with open('/Users/onepiece/Documents/Projects/Electhon-2023/Maps/Scripts/modified_geojson_file.geojson') as f:
    geojson_data = json.load(f)

# convert to KML with styles preserved
kml_data = geojson2kml.convert(geojson_data, style_mode=geojson2kml.StyleMode.POLYGON)

# write the KML file
with open('final.kml', 'w') as f:
    f.write(kml_data)
