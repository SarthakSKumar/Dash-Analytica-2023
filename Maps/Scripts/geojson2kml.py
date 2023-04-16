import random

# Define a list of colors
colors = ['#00BF63', '#7ED957', '#FFDE59', '#FFBD59', '#FF914D', '#FF5757', '#FF3131']

# Open the KML file and read its contents
try:
    with open('/Users/onepiece/Documents/Projects/Electhon-2023/Maps/Datasets/RR_MAL_AYA_BSouth_ORG_MAP.kml', 'r') as kml_file:
        kml_contents = kml_file.read()
except FileNotFoundError:
    print("Error: file not found!")
    exit()

# Replace all occurrences of "{colorValue}" with a random color from the list
while '{colorValue}' in kml_contents:
    kml_contents = kml_contents.replace('{colorValue}', random.choice(colors), 1)

# Write the updated contents back to the KML file
try:
    with open('/Users/onepiece/Documents/Projects/Electhon-2023/Maps/Datasets/RR_MAL_AYA_BSouth_ORG_MAP.kml', 'w') as kml_file:
        kml_file.write(kml_contents)
except:
    print("Error: unable to write to file!")
    exit()

print("File updated successfully!")
