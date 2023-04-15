import xml.etree.ElementTree as ET

# open the input file
with open(r'C:\Users\sunil\Desktop\Electhon-2023\Maps\Datasets\RR_MAL_AYA_BSouth_ORG_MAP.kml', 'r') as f:
    tree = ET.parse(f)
    root = tree.getroot()

    # loop through all Placemark elements
    for placemark in root.findall('.//{http://www.opengis.net/kml/2.2}Placemark'):

        # find the Polystyle element
        polystyle = placemark.find('.//{http://www.opengis.net/kml/2.2}PolyStyle')

        # replace the Polystyle element with the specified tags
        polystyle.clear()
        ET.SubElement(polystyle, 'color').text = '{color_tag}'
        ET.SubElement(polystyle, 'fill').text = '1'
        ET.SubElement(polystyle, 'outline').text = '1'

    # write the updated KML to a new file
    with open('new.kml', 'w') as out_file:
        out_file.write(ET.tostring(root).decode())
