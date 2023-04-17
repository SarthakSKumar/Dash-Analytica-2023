import json

# Load the GeoJSON data from a file
with open('output.geojson') as f:
    data = json.load(f)

# Modify the data as needed
for feature in data["features"]:
    voter_turnout = round(float(feature["properties"]["voter_turnout"].strip()))
    if 70 < voter_turnout <= 100:
        feature["properties"]["fill"] = "#00FF00"
    elif 55 < voter_turnout <= 70:
        feature["properties"]["fill"] = "#a0d600"
    elif 42 < voter_turnout <= 55:
        feature["properties"]["fill"] = "#d7a700"
    elif 35 < voter_turnout <= 42:
        feature["properties"]["fill"] = "#f66d00"
    elif 00 < voter_turnout <= 35:
        feature["properties"]["fill"] = "#ff0000"

# Save the modified GeoJSON data back to the file
with open('output.geojson', 'w') as f:
    json.dump(data, f)
