import json

# Load the GeoJSON data from a file
with open('/Users/onepiece/Documents/Projects/Electhon-2023/Maps/Scripts/modified_geojson_file.geojson') as f:
    data = json.load(f)

# Modify the data as needed
count = 0
for feature in data["features"]:
    voter_turnout = feature["properties"]["voter_turnout"]
    feature["properties"]["voter_turnout"] = f'\r\n      {voter_turnout}%\r\n'
    count += 1
print(count)
# # Save the modified GeoJSON data back to the file
with open('Maps/Scripts/modified_geojson_file.geojson', 'w') as f:
    json.dump(data, f)
