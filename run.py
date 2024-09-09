from flask import Flask, render_template

# Create a Flask application
app = Flask(__name__)

# Define the route for the homepage
@app.route('/')
def index():
    return render_template('index.html')

# Define the route for the features page
@app.route('/features')
def features():
    return render_template('features.html')

# Run the application
if __name__ == '__main__':
    app.run(debug=True)
