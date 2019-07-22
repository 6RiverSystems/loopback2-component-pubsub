# loopback2-component-pubsub

Loopback v2.x component that injects pubsub client into the global app object.

The main difference with Loopback /change-stream channels is that this implementation creates only two observers (after save and after delete) per model and then streams the changes to keep-alive registered connections. In contrast Loopback creates two same observers for **each** connection.


## Install and Setup
Install the company:
  npm install --save loopback2-component-pubsub


Add the following configuration to component-config.json:

  ```javascript
  {
    ...
    "loopback2-component-pubsub": {
      "projectId": "my-project",
			...
    },
    ...
  }
  ```

## Usage

Access pubsub client using `app.pubsub` field.
