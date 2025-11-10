from flask import Flask, render_template, jsonify
import json
import os

app = Flask(__name__)

def load_config():
    """Load configuration from config.json"""
    with open('config.json', 'r') as f:
        return json.load(f)

@app.route('/')
def index():
    """Render the countdown page"""
    config = load_config()
    return render_template('index.html', 
                         title=config['title'],
                         description=config['description'])

@app.route('/api/target')
def get_target():
    """API endpoint to get the target date"""
    config = load_config()
    return jsonify({
        'target_date': config['target_date'],
        'title': config['title'],
        'description': config['description']
    })

if __name__ == '__main__':
    # Debug mode should only be enabled in development
    debug_mode = os.environ.get('FLASK_DEBUG', 'False').lower() == 'true'
    app.run(debug=debug_mode, host='0.0.0.0', port=5000)
