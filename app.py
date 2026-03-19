from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Vital for Task 6 to work!

products = [
    {"id": "1", "name": "A4 Notebook", "description": "100 pages, ruled"},
    {"id": "2", "name": "Gel Pen Blue", "description": "0.5mm, smooth writing"},
    {"id": "3", "name": "Scientific Calculator", "description": "240 functions"}
]

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
