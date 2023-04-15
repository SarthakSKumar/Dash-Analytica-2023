import os
from lxml import etree

# Take input from user
name = input("Enter the name attribute in the SimpleData tag to remove: ")

# Set the path of the input KML file
kml_file = r"C:\Users\sunil\Desktop\Electhon-2023\Maps\RR_MAL_AYA_BSouth_Map.kml"

# Set the path of the output modified KML file
output_file = os.path.splitext(kml_file)[0] + "_modified.kml"

# Parse the KML file using lxml library
tree = etree.parse(kml_file)

# Find all the <SimpleData> tags with the specified name attribute and remove them
for simple_data in tree.xpath("//kml:SimpleData[@name='%s']" % name, namespaces={"kml": "http://www.opengis.net/kml/2.2"}):
    simple_data.getparent().remove(simple_data)

# Write the modified KML file to disk
with open(output_file, "wb") as f:
    f.write(etree.tostring(tree, pretty_print=True))
