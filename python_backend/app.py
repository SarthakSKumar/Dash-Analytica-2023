import pandas as pd
from flask import Flask, jsonify

app = Flask(__name__)

# create a sample dataframe
df = pd.read_excel("/Users/onepiece/Documents/Projects/Electhon-2023/Maps/Datasets/tweets_data.xlsx")

@app.route('/graphs', methods=['GET'])
def get_data():
    return jsonify(df.to_dict())

if __name__ == '__main__':
    app.run(debug=True)
