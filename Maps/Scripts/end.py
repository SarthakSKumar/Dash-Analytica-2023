import json
from xml.etree.ElementTree import Element, SubElement, Comment, tostring


def create_kml(geojson_data):
    def create_kml(geojson_data):
    kml = Element("kml", xmlns="http://www.opengis.net/kml/2.2")
    doc = SubElement(kml, "Document")

    for idx, feature in enumerate(geojson_data["features"]):
        style_id = f"feature{idx+1}"
        style = SubElement(doc, "Style", id=style_id)
        polystyle = SubElement(style, "PolyStyle")
        color = SubElement(polystyle, "color")
        color.text = feature["style"]["fill"].lstrip("#") + "99"  # Assuming fill-opacity is in the range 0-1
        outline = SubElement(polystyle, "outline")
        outline.text = "true"

        placemark = SubElement(doc, "Placemark")
        name = SubElement(placemark, "name")
        name.text = feature["properties"]["PS_Name"].strip()

        description = SubElement(placemark, "description")
        description.text = "<![CDATA[\n" + "\n".join(f"{k}: {v.strip()}" for k, v in feature["properties"].items()) + "\n]]>"

        styleurl = SubElement(placemark, "styleUrl")
        styleurl.text = f"#{style_id}"

        polygon = SubElement(placemark, "Polygon")
        outerboundaryis = SubElement(polygon, "outerBoundaryIs")
        linearring = SubElement(outerboundaryis, "LinearRing")
        coordinates = SubElement(linearring, "coordinates")
        coordinates.text = "\n".join(f"{coord[0]},{coord[1]}" for coord in feature["geometry"]["coordinates"][0])

    return tostring(kml, encoding="utf-8", method="xml").decode("utf-8")


def read_geojson_file(file_path):
    with open(file_path, "r") as file:
        return json.load(file)


def save_kml_file(kml_str, output_file_path):
    with open(output_file_path, "w") as kml_file:
        kml_file.write(kml_str)


def main():
    input_file_path = r"C:\Users\sunil\Desktop\Electhon-2023\Maps\Datasets\precise.geojson"
    output_file_path = "hopeful.kml"

    geojson_data = read_geojson_file(input_file_path)
    kml_str = create_kml(geojson_data)
    save_kml_file(kml_str, output_file_path)

    print("KML file created successfully.")


if __name__ == "__main__":
    main()
