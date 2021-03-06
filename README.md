# Catenis Flow

A set of Node-RED nodes used to interact with the Bitcoin blockchain by means of the Catenis Enterprise API.

This version (3.0.2) is compliant with Catenis API version 0.10.

# Installation

Run the following npm command in your Node-RED user directory (typically `~/.node-red`):

```shell
npm install catenis-flow
```

Once you install the package and restart Node-RED, you'll see a new set of nodes in the sidebar under the category `Catenis Flow`.

# Usage

The Catenis Flow nodes map to the Catenis Enterprise API methods. Just add them to a flow, configure them, and start interacting with the Bitcoin blockchain.

For further information, you can always reference the [Catenis Enterprice API Documentation](https://catenis.com/docs/api).

# Error handling

Errors generated by the Catenis Flow nodes while trying to access the Catenis Enterprise API methods can be caught using the standard `catch` node.

## License

This Node.js module is released under the [MIT License](LICENSE). Feel free to fork, and modify!

Copyright © 2020, Blockchain of Things Inc.
