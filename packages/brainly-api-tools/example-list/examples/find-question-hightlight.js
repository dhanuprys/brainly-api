const { BrainlyAPI, Server } = require('brainly-api');

BrainlyAPI.startWorker({ experimental: true, server: Server.ID }, async brainly => {
    // find question
    const questionResults = await brainly.findQuestionHighlight(brainly.currentServer.Subjects.Matematika);
    //                                                          ^^^^^^^^^^^^^^^^^^^^^ = Server.ID

    // get raw data
    console.log(questionResults.raw);

    // get first question if available
    console.log(questionResults.getFirstQuestion());

    // get last question if available
    console.log(questionResults.getLastQuestion());

    // get all available question
    console.log(questionResults.getAllQuestion());

    // get all available question using Symbol.iterator
    console.log([...questionResults]);
    console.log(Array.from(questionResults));
    // for - of
});