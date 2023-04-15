import xml.etree.ElementTree as ET


def edit_kml_file(input_file):
    # Parse the input file
    tree = ET.parse(r'C:\Users\sunil\Desktop\Electhon-2023\Maps\files\ac157-malleswaram.kml')
    root = tree.getroot()

    # Find all Polygon elements and update their PolyStyle tag
    for polygon in root.findall(".//{http://www.opengis.net/kml/2.2}Polygon"):
        poly_style = polygon.find("{http://www.opengis.net/kml/2.2}styleUrl")
        if poly_style.text == "#transBluePoly":
            # Create a new PolyStyle element
            new_poly_style = ET.Element("{http://www.opengis.net/kml/2.2}PolyStyle")

            # Check if color attribute exists and add it if it doesn't
            if not new_poly_style.attrib.get("color"):
                new_poly_style.attrib["color"] = "7fff0000"

            # Check if fill attribute exists and add it if it doesn't
            if not new_poly_style.attrib.get("fill"):
                new_poly_style.attrib["fill"] = "1"

            # Check if outline attribute exists and add it if it doesn't
            if not new_poly_style.attrib.get("outline"):
                new_poly_style.attrib["outline"] = "1"

            # Replace the old PolyStyle element with the new one
            polygon.replace(poly_style, new_poly_style)

    # Write the updated tree to the input file
    tree.write(input_file)


if __name__ == "__main__":
    edit_kml_file("input.kml")
