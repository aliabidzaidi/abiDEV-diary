---
tags:
  - python
  - javascript
  - socketio
  - flask
published: true
date: 2020-10-06T11:40:29.332Z
title: Python Flask Chat room using Socket.io
---
> ##### *For the curiosity of real time connections*

This is a small introduction on socket.io and its integration with a Python Flask backend to the end of this readings I'll deploy this on Heroku as well. This will have a minimal UI using Flask's template engine, overall the libraries used here are:

* [Python](https://www.python.org/)
* [Socket.IO](https://socket.io/)
* [Python Flask](https://flask.palletsprojects.com/en/1.1.x/)
* [Flask SocketIO](https://flask-socketio.readthedocs.io/en/latest/)

### Creating the project with pipenv and installing dependencies

**Pipenv** is a way you can package python projects, will be using it for this project*.* To start of we'll install pipenv and initialize your folder with the python version.

You could probably skip using pipenv if you're not comfortable. Simply pip install the libraries required and they'll be stored globally.

```shell
pip install pipenv
pipenv --python C:\Python38-32\python.exe  #your path to python
pipenv shell
pipenv install flask
pipenv install flask-socketio
```

### Setting up Flask's API and Templates

Once the project is setup now we'll add few flask API methods and html templates for a chat room page. Within the root folder first create a file **'app.py'** and add folders **'templates', 'statis'** where all our html files and static files will go respectively, the structure should look something like this.

```
static/
  script.js
templates/
  index.html
  404.html
app.py
```

In the ***app.py*** copy the code below which is a boilerplate for python flask API, if you are struggling understanding it, try watching a tutorial on Flask or read its documentation

```python
from flask import Flask, request, render_template
app = Flask(__name__)

@app.route('/hello', methods=['GET'])
def hello():
    return 'Hello World'

@app.route('/')
def index():
    return render_template('index.html')

@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404

if __name__ == "__main__":
    app.run(debug=True)
```

Our ***index.html*** file will call JS files and there is a weird way you add static files in your html. Like this:

```django
<script type="text/javascript" src="{{ url_for('static', filename='script.js')}}"></script>
```

**TODO:** Create minimal html styling for a chat room

#### Adding Flask SocketIO methods

**TODO:** Add Socketio methods in python flask API Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

#### Socket.IO 🤝 JS

**TODO:**  Create socketio() in JS and call socketio methodsLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

#### Deploying on Heroku

**TODO:** Basics of Heroku, Procfile, dynos, worker processes Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<https://ajeebchat.herokuapp.com/>

![Screenshot of ajeeb chat room](https://raw.githubusercontent.com/aliabidzaidi/abiDEV-diary/master/static/assets/ajeeb-chat.png "Ajeeb chat room home page screenshot")

**You can find this project on github : <https://github.com/aliabidzaidi/ajeeb-chat-room>**
