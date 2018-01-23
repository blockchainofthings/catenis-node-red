/*
* @Author: Mahesh J
* @Date:   2017-12-26 18:03:50
*/

var responseHandler = require('../../util/catenis-api-response-handler.js');

module.exports = function(RED) {
    function RetrieveMessageNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var device = RED.nodes.getNode(config.device);

        node.on('input', function(msg) {
            var ctnApiClient = device.ctnApiClient;

            ctnApiClient.readMessage(msg.payload.messageId, config.encoding, responseHandler.bind(node, msg));
        });
    }
    RED.nodes.registerType("read message", RetrieveMessageNode);
}
