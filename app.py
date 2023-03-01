from flask import *

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return "TODO"
    # need to make an about page

@app.route('/contact', methods= ['GET', 'POST'])
def contact():
    if request.method == 'GET':
        return render_template('contact.html')

