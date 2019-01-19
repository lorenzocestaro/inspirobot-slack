# inspirobot-slack

_Barebones, no dependencies, Node.js server to integrate [inspirobot](http://inspirobot.me/) on slack._

_Inspiration on the workplace is just a message away._

[![Build Status](https://travis-ci.org/lorenzocestaro/inspirobot-slack.svg?branch=master)](https://travis-ci.org/lorenzocestaro/inspirobot-slack)
[![Test Coverage](https://api.codeclimate.com/v1/badges/39bc3bdb846fb0460f94/test_coverage)](https://codeclimate.com/github/lorenzocestaro/inspirobot-slack/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/39bc3bdb846fb0460f94/maintainability)](https://codeclimate.com/github/lorenzocestaro/inspirobot-slack/maintainability)
[![npm version](https://badge.fury.io/js/inspirobot-slack.svg)](https://badge.fury.io/js/inspirobot-slack)

<p align="center">
  <img src="https://github.com/lorenzocestaro/inspirobot-slack/blob/master/docs/usage-example.gif" width="1024"/>
</p>

- [Step 1: Deploy](#step-1--deploy)
  * [Option 1: Host on Heroku](#option-1--host-on-heroku)
  * [Option 2: Use Docker (run everywhere)](#option-2--use-docker--run-everywhere-)
- [Step 2: Create a Slack app](#step-2--create-a-slack-app)
- [API](#api)

## Step 1: Deploy
### Option 1: Host on Heroku
To deploy your own instance of `inspirobot-slack` on [Heroku](https://www.heroku.com/home):
- Fork the repository.
- [Create an Heroku account](https://signup.heroku.com/login), if you are not registered yet.
- Create a new heroku app.

You can choose the deployment method you prefer, I suggest linking your app to
__GitHub__ and syncing upstream to be always up to date.

More on deploying with Heroku [here](https://devcenter.heroku.com/categories/deployment).

### Option 2: Use Docker (run everywhere)
Images for all project versions are available.
```bash
$ docker pull lorenzocestaro/inspirobot-slack
$ docker run -p 80:<EXTERNAL_PORT> lorenzocestaro/inspirobot-slack
```

## Step 2: Create a Slack app
To add inspirobot to your Slack workspace:
- [Create a new app](https://api.slack.com/apps?new_app=1).
- Add a [slash command](https://api.slack.com/slash-commands) to your app.
- Configure your slash command to sent a request to your deployed service on the
`/quote` route.
- Install your app as an [internal integration](https://api.slack.com/internal-integrations) for your workspace.

## API
**Get an inspirobot quote url as a Slack message**

Returns json data with the Slack's message.
- **URL:** `/quote`
- **Method:**  POST`
- **Query parameters:** `None`
- **Data parameters:** `None`
- **Success Response:**
    - **Code:** `200`
    - **Content:**
        ```json
        {
          "attachments": [
            {
              "image_url": "http://generated.inspirobot.me/095/aXm2323xjU.jpg"
            }
          ],
          "response_type": "in_channel",
          "text": "Get inspired!"
        }
        ```
-  **Error Response:**
	- **Code:** `500`
	- **Content:** `"Error message"`
