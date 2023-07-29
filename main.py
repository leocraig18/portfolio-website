from flask import Flask, render_template, url_for
from datetime import datetime

app = Flask(__name__)


@app.route('/')
def index():
    date = datetime.now()
    dob = datetime(2001, 4, 18)
    age = date.year - dob.year - ((date.month, date.day) < (dob.month, dob.day))
    return render_template('index.html', age=age)


@app.route('/resume')
def resume():
    return render_template('resume.html')


if __name__ == '__main__':
    app.run(debug=True)
