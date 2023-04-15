import json
import random
from lxml import etree

# Read JSON file
with open("output.json", "r") as json_file:
    json_data = json.load(json_file)

# Read KML file
with open(r"C:\Users\sunil\Desktop\Electhon-2023\Maps\RR_MAL_AYA_BSouth_Map.kml", "r") as kml_file:
    parser = etree.XMLParser(remove_blank_text=True)
    kml_tree = etree.parse(kml_file, parser)
    kml_root = kml_tree.getroot()

# Create a dictionary for JSON data with boothNumber as key
json_dict = {item["boothNumber"]: item for item in json_data}

# Iterate through all Placemark elements in the KML file
for placemark in kml_root.findall(".//Placemark", namespaces=kml_root.nsmap):
    extended_data = placemark.find("ExtendedData", namespaces=kml_root.nsmap)
    schema_data = extended_data.find("SchemaData", namespaces=kml_root.nsmap)
    polling_station_code = schema_data.find("SimpleData[@name='Polling_Station_Code']", namespaces=kml_root.nsmap)
    registered_voters = schema_data.find("SimpleData[@name='Registered_Voters']", namespaces=kml_root.nsmap)

    code = polling_station_code.text
    booth_data = json_dict.get(code)

    voter_turnout = etree.Element("SimpleData", name="Voter_Turnout")

    if booth_data and registered_voters is not None:
        total_votes = int(booth_data["totalVotes"])
        registers = int(registered_voters.text)
        turnout = total_votes * 100 / registers
    elif booth_data:
        total_votes = int(booth_data["totalVotes"])
        turnout = total_votes * random.uniform(0, 1)
    elif registered_voters is not None:
        registers = int(registered_voters.text)
        turnout = registers * random.uniform(0, 1)
    else:
        turnout = 45

    voter_turnout.text = str(turnout)
    schema_data.append(voter_turnout)

# Write updated KML to a new file
with open("output_data.kml", "wb") as kml_output_file:
    kml_tree.write(kml_output_file, pretty_print=True, xml_declaration=True, encoding="utf-8")
