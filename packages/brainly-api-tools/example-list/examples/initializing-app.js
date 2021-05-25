const { BrainlyAPI, Server } = require('brainly-api');

BrainlyAPI.startWorker({ experimental: true, server: Server.ID }, () => {
    // Your worker
});