---
tags:
  - python
  - javascript
  - socketio
  - flask
published: false
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

**Pipenv** is a way you can package python projects which works well with *requirements.txt.* To start of we'll install pipenv and initialize your folder with the python version.

You could probably skip using pipenv if you're not comfortable. Simply pip install the libraries required and they'll be stored globally.

```shell
pip install pipenv
pipenv --python=3.8  #your version of python
pipenv shell
pipenv install flask
pipenv install flask-socketio
```



### Setting up Flask's API and Templates

Once the project is setup now we'll add few flask API methods and html templates for a chat room page.

#### Adding Flask SocketIO methods

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.



#### Socket.IO 🤝 JS

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.



#### Deploying on Heroku

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

https://ajeebchat.herokuapp.com/

![Screenshot of ajeeb chat room](assets/ajeeb-chat.png "Ajeeb chat room home page screenshot")

**You can find this project on github : https://github.com/aliabidzaidi/ajeeb-chat-room**