from flask_cors import CORS
from flask import Flask, jsonify
import pandas as pd
import requests

df = pd.read_excel(r"C:\Users\sunil\Desktop\Electhon-2023\Maps\Datasets\tweets_data.xlsx")

app = Flask(__name__)
CORS(app)


app = Flask(__name__)

# Route that returns a JSON response


@app.route('/graphs', methods=['GET'])
def get_data():
    data = df.to_dict(orient='records')
    return jsonify(data)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
