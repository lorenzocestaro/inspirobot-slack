# inspirobot-slack
![build](https://travis-ci.org/lorenzocestaro/inspirobot-slack.svg?branch=master)
![codecov](https://codecov.io/gh/lorenzocestaro/inspirobot-slack/branch/master/graph/badge.svg)
![maintainability](https://api.codeclimate.com/v1/badges/39bc3bdb846fb0460f94/maintainability)
![npm version](https://badge.fury.io/js/inspirobot-slack.svg)

_Barebones, no dependencies, Node.js server to integrate [inspirobot](http://inspirobot.me/) on slack._

Supports slack's `POST` requests generated from slash commands.

---
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
