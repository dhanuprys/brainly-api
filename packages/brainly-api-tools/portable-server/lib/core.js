const process = require('process');
const express = require('express');
const router = require('./router');
const app = express();

module.exports = {
    execute: function (port) {
        if (port === undefined || port === null) {
            port = process.env.PORT || 5050;
        }

        // Apply app routes
        router(app);

        app.listen(port, () => {
            console.log('Server started');
        });
    }
}