import json

# Open the input GeoJSON file
with open('file.geojson', 'r') as f:
    data = json.load(f)

# Define the list of updates in the format [PSCode, totalVotes, Voter_TurnOut, registered_voters]
updates = [['173191', '207', '30.0%', '690'], ['173038', '5', '0.98%', '510'], ['173075', '46', '11.79%', '390'], ['154255', '86', '11.94%', '720'], ['154254', '562', '66.9%', '840'], ['154280', '245', '42.98%', '570'], ['157132', '235', '48.96%', '480'], ['157093', '372', '62.0%', '600'], ['176397', '348', '40.0%', '870'], ['176389', '55', '7.97%', '690'], ['176216', '446', '61.94%', '720'], ['176417', '144', '20.0%', '720'], ['176482', '69', '10.0%', '690'], ['176481', '201', '31.9%', '630'], ['176465', '191', '28.94%', '660'], ['176437', '247', '32.93%', '750']]

# Loop through the features in the GeoJSON and update the properties as necessary
for feature in data['features']:
    if str(feature['properties']['PSCode'].strip()) in [update[0] for update in updates]:
        print(True)
        for update in updates:
            print(update[1])
            if str(feature['properties']['PSCode'].strip()) == update[0]:
                feature['properties']['total_votes'] = f"\r\n       {update[1]}\r\n      "
                feature['properties']['voter_turnout'] = f"\r\n       {update[2]}\r\n      "
                feature['properties']['registered_voters'] = f"\r\n       {update[3]}\r\n      "

# Write the updated GeoJSON to a file
with open('output.geojson', 'w') as f:
    json.dump(data, f)


# import json

# # Load the GeoJSON file
# with open(r'C:\Users\sunil\Desktop\Electhon-2023\Maps\Scripts\output.geojson') as f:
#     geojson_data = json.load(f)

# # Load the JSON file
# with open(r'C:\Users\sunil\Desktop\Electhon-2023\Maps\Datasets\mod.json') as f:
#     json_data = json.load(f)

# # Update the total_votes property in the GeoJSON file
# for feature in geojson_data['features']:
#     ps_code = str(feature['properties']['PSCode'].strip())
#     for item in json_data:
#         if item['PSCode'] == str(ps_code[0:3] + "-" + ps_code[3:]):
#             print(True)
#             feature['properties']['total_votes'] = f"\r\n       {item['totalVotes']}\r\n      "
#             if int(feature['properties']['registered_voters'].strip()) > int(item['totalVotes']):
#                 calc = round((int(item['totalVotes']) / int(feature['properties']['registered_voters'].strip())) * 100, 2)
#             else:
#                 calc = round((int(feature['properties']['registered_voters'].strip()) / int(item['totalVotes'])) * 100, 2)
#             feature['properties']['voter_turnout'] = f"\r\n       {calc}\r\n      "
#             break

# # Save the updated GeoJSON file
# with open('file.geojson', 'w') as f:
#     json.dump(geojson_data, f)
