import os
from lxml import etree


name = input("Enter the name attribute in the SimpleData tag to remove: ")


kml_file = r"C:\Users\sunil\Desktop\Electhon-2023\Maps\RR_MAL_AYA_BSouth_ORG_MAP.kml"


output_file = os.path.splitext(kml_file)[0] + "_modified.kml"


tree = etree.parse(kml_file)


for simple_data in tree.xpath("//kml:SimpleData[@name='%s']" % name, namespaces={"kml": "http://www.opengis.net/kml/2.2"}):
    simple_data.getparent().remove(simple_data)


with open(output_file, "wb") as f:
    f.write(etree.tostring(tree, pretty_print=True))
