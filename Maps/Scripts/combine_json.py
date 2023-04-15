import json
import os

# path to directory containing JSON files
dir_path = "/Users/onepiece/Documents/Projects/Electhon-2023/Maps/Datasets/hashtags"

# list of JSON files in directory
json_files = [f for f in os.listdir(dir_path) if f.endswith('.json')]

# dictionary to store combined JSON data
combined_json = {}

# iterate over JSON files
for json_file in json_files:
    # open file and load JSON data
    data_json = []
    filename = os.path.splitext(json_file)[0]
    with open(os.path.join(dir_path, json_file), 'r') as f:
        Lines = f.readlines()
        for line in Lines:
            t = json.loads(line)
            data_json.append(t)

    # add JSON data to combined dictionary
    combined_json[filename] = data_json

# write combined JSON data to file
with open('Maps/Datasets/combined.json', 'w') as f:
    json.dump(combined_json, f)
