import lxml.etree as ET


tree = ET.parse(r"C:\Users\sunil\Desktop\Electhon-2023\Maps\RR_MAL_AYA_BSouth_ORG_MAP.kml")
root = tree.getroot()


to_remove = [154377, 154378, 154379, 154380, 154381, 157212, 157213, 176483, 176484, 176485, 176486, 176487, 176488, 176489, 176490, 176491, 176492, 176493, 176494, 176495, 176496, 176497, 176498, 176499, 176500, 176501, 176502, 176503, 176504, 176505, 176506, 176507, 176508, 176509, 176510, 176511, 176512, 176513, 176514, 176515, 176516, 176517, 176518, 176519, 176520]


for placemark in root.findall(".//{http://www.opengis.net/kml/2.2}Placemark"):
    pscode_elem = placemark.find(".//{http://www.opengis.net/kml/2.2}SimpleData[@name='PSCode']")
    if pscode_elem is not None:
        pscode = int(pscode_elem.text.strip())
        if pscode in to_remove:

            parent = placemark.getparent()
            parent.remove(placemark)


tree.write("final.kml")
