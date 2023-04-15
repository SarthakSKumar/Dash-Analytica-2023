import json

geojson_path = r"C:\Users\sunil\Desktop\Electhon-2023\Maps\Scripts\new.geojson"
json_path = r"C:\Users\sunil\Desktop\Electhon-2023\Maps\Datasets\sheetsData.json"
output_path = r"C:\Users\sunil\Desktop\Electhon-2023\Maps\Scripts\updated.geojson"

# Load the GeoJSON file
with open(geojson_path, "r") as f:
    geojson_data = json.load(f)

# Load the JSON file
with open(json_path, "r") as f:
    json_data = json.load(f)

# Iterate through each feature in the GeoJSON file
for feature in geojson_data["features"]:
    # Get the PSCode for the current feature
    ps_code = int(feature["properties"]["PSCode"])
    # Search for a matching object in the JSON file
    json_object = next((obj for obj in json_data if str(obj["PSCode"]) == str(ps_code)), None)
    print(json_object)
    # If there is a match, calculate the voter turnout percentage and add it to the feature's properties object
    if json_object:
        total_votes = json_object["totalVotes"]
        registered_voters = int(feature["properties"]["registered_voters"].strip())
        voter_turnout = round(total_votes * 100 / registered_voters, 2)
        feature["properties"]["voter_turnout"] = f"{voter_turnout}%"

# Write the updated GeoJSON file to disk
with open(output_path, "w") as f:
    json.dump(geojson_data, f)
