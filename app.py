from flask import Flask, request, jsonify

app = Flask(__name__)

# Dummy data to send back to the client
data = {
    "i1": [{"name": "TN", "description": "Description 1"}],
    "i2": [{"name": "Kerala", "description": "Description 2"}],
}

@app.route('/handleClick', methods=['GET'])
def handle_click():
    value = request.args.get('value')
    response_data = data.get(value, [])
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)