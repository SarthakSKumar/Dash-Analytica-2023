import re

# Open the KML file and read its contents
with open(r'C:\Users\sunil\Desktop\Electhon-2023\Maps\modified_polling_stations.kml', 'r') as kml_file:
    kml_contents = kml_file.read()

# Find all the occurrences of Polling_Station_Code using regular expressions
polling_station_codes = re.findall(r'<SimpleData name="Polling_Station_Code">\s*(.*?)\s*</SimpleData>', kml_contents)

# Write the polling station codes to a new file called output.txt
with open('output.txt', 'w') as output_file:
    for code in polling_station_codes:
        output_file.write(code + '\n')
