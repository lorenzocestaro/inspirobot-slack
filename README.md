# inspirobot-slack
[![Build Status](https://travis-ci.org/lorenzocestaro/inspirobot-slack.svg?branch=master)](https://travis-ci.org/lorenzocestaro/inspirobot-slack)
[![Test Coverage](https://api.codeclimate.com/v1/badges/39bc3bdb846fb0460f94/test_coverage)](https://codeclimate.com/github/lorenzocestaro/inspirobot-slack/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/39bc3bdb846fb0460f94/maintainability)](https://codeclimate.com/github/lorenzocestaro/inspirobot-slack/maintainability)
[![npm version](https://badge.fury.io/js/inspirobot-slack.svg)](https://badge.fury.io/js/inspirobot-slack)

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
