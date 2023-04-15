import json

# Load the GeoJSON data from a file
with open('/Users/onepiece/Documents/Projects/Electhon-2023/Maps/Scripts/modified_geojson_file.geojson') as f:
    data = json.load(f)

# Modify the data as needed
count = 0
for feature in data["features"]:
    if 90<float(feature["properties"]["voter_turnout"])<=100:
        feature["style"]["fill"] = "#00BF63"
    elif 80<float(feature["properties"]["voter_turnout"])<=90:
        feature["style"]["fill"] = "#7ED957"
    elif 70<float(feature["properties"]["voter_turnout"])<=80:
        feature["style"]["fill"] = "#FFDE59"
    elif 60<float(feature["properties"]["voter_turnout"])<=70:
        feature["style"]["fill"] = "#FFBD59"
    elif 50<float(feature["properties"]["voter_turnout"])<=60:
        feature["style"]["fill"] = "#FF914D"
    elif 40<float(feature["properties"]["voter_turnout"])<=50:
        feature["style"]["fill"] = "#FF5757"
    elif 0<=float(feature["properties"]["voter_turnout"])<=40:
        feature["style"]["fill"] = "#FF3131"
    count += 1
print(count)
# # Save the modified GeoJSON data back to the file
with open('Maps/Scripts/modified_geojson_file.geojson', 'w') as f:
    json.dump(data, f)
