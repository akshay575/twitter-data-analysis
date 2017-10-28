from flask import Flask, render_template, make_response
from flask_restful import Resource, Api
import requests
from requests_oauthlib import OAuth1

app = Flask(__name__, static_folder='public')
api = Api(app)

app_key = ''
app_key_secret = ''
user_token = ''
user_token_secret = ''

class Home(Resource):
    def get(self):
        headers = {'Content-Type': 'text/html'}
        return make_response(render_template('index.html'), 200, headers)

class User(Resource):
    def get(self):
        url = 'https://api.twitter.com/1.1/account/verify_credentials.json'
        auth = OAuth1(app_key, app_key_secret, user_token, user_token_secret)
        data = requests.get(url, auth=auth)
        return {'user': data.json()['name']}

class Tweet(Resource):
    def get(self, q):
        url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + q
        auth = OAuth1(app_key, app_key_secret, user_token, user_token_secret)
        data = requests.get(url, auth=auth).json()['statuses']
        list = []
        for item in data:
            list.append(item['text'])
        return list

api.add_resource(Home, '/')
api.add_resource(User, '/user')
api.add_resource(Tweet, '/tweets/<string:q>')

app.run(port=5000)
