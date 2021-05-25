const { BrainlyAPI, Server } = require('brainly-api');

BrainlyAPI.startWorker({ experimental: true, server: Server.ID }, async brainly => {
    // fetching user profile
    const userprofile = await brainly.fetchUserProfile('11702494');

    // get id
    console.log(await userprofile.getId());

    // get nickname
    console.log(await userprofile.getNick());

    // get avatar url
    console.log(await userprofile.getAvatar());
});