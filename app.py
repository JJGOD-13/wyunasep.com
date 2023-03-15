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
    if request.method == 'POST':
        # Check all of the input that is given by the user
        if not request.form.get('name'):
            return TODO
        if not request.form.get('email'):
            return TODO
        if not request.form.get('message'):
            return TODO
        


