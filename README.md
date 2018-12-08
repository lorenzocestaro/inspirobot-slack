# inspirobot-slack
_Barebones, no dependencies, Node.js server to integrate [inspirobot](http://inspirobot.me/) on slack._

![Build Status](https://travis-ci.org/lorenzocestaro/inspirobot-slack.svg?branch=master)

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
