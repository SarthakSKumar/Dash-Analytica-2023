import json


def create_kml(geojson_data):
    kml = '<?xml version="1.0" encoding="UTF-8"?>\n<kml xmlns="http://www.opengis.net/kml/2.2">\n<Document>\n'

    for feature in geojson_data["features"]:
        if (
            "geometry" not in feature
            or "coordinates" not in feature["geometry"]
            or len(feature["geometry"]["coordinates"]) == 0
            or len(feature["geometry"]["coordinates"][0]) == 0
            or any(len(coord) < 2 for coord in feature["geometry"]["coordinates"][0])
        ):
            print("Skipping feature with empty or incorrect coordinates")
            continue

        # Style
        style_id = f"style-{feature['properties']['PSCode'].strip()}"
        style = f'<Style id="{style_id}">\n<PolyStyle>\n<color>{feature["style"]["fill"][1:]}</color>\n<fill>1</fill>\n<outline>1</outline>\n</PolyStyle>\n</Style>\n'
        kml += style

        # Placemark
        kml += '<Placemark>\n'
        kml += f'<name>{feature["properties"]["PS_Name"].strip()}</name>\n'
        kml += f'<description>{feature["properties"]["locality"].strip()}</description>\n'
        kml += f'<styleUrl>#{style_id}</styleUrl>\n'
        kml += '<Polygon>\n<tessellate>1</tessellate>\n<outerBoundaryIs>\n<LinearRing>\n<coordinates>\n'
        kml += "\n".join(f"{coord[0]},{coord[1]}" for coord in feature["geometry"]["coordinates"][0])
        kml += '\n</coordinates>\n</LinearRing>\n</outerBoundaryIs>\n</Polygon>\n</Placemark>\n'

    kml += '</Document>\n</kml>'

    return kml


def main():
    input_file = r"C:\Users\sunil\Desktop\Electhon-2023\Maps\Datasets\precise.geojson"
    output_file = "hopeful.kml"

    with open(input_file, "r") as f:
        geojson_data = json.load(f)

    kml_str = create_kml(geojson_data)

    with open(output_file, "w") as f:
        f.write(kml_str)

    print(f"KML file saved to {output_file}")


if __name__ == "__main__":
    main()
