import flask

app = flask.Flask(__name__)

@app.route('/')
def index():
    return flask.render_template('index.html')

@app.route('/about')
def about():
    return "TODO"
    # need to make an about page

@app.route('/contact')
def contact():
    return "TODO"
    # need to make a contact page with a form