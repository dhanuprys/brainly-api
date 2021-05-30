const { BrainlyAPI, Server } = require('brainly-api');
const { createNumericLiteral } = require('typescript');

module.exports = function (app) {
    // const underDevelopment = (req, res) => {
    //     console.log(req.query);
    //     res.send('Under development');
    // }

    const createBrainlyWorker = (server) => {
        return (cb) => {
            BrainlyAPI.startWorker({
                experimental: true, 
                server: server
            }, cb)
        }
    };

    app.use((req, res, next) => {
        const server = req.query.server 
                    ? (
                        Server[req.query.server.toUpperCase()] 
                        ? Server[req.query.server.toUpperCase()] 
                        : Server.US
                        )
                    : Server.US; 

        req.brainly = createBrainlyWorker(server);

        next();
    })

    app.get('/v1/findquestion', (req, res) => {
        // query
        req.brainly(async brainly => {
            brainly.findQuestion(req.query.query).then(result => {
                res.send(result.raw);
            }).catch(err => {
                console.log(err);
            })
        });
    });
    
    app.get('/v1/userprofile', (req, res) => {
        // userId, server
        req.brainly(async brainly => {
            brainly.fetchUserProfile(req.query.userId).then(profile => {
                res.send(profile.raw);
            }).catch(err => {
                console.log(err);
            });
        });
    });
    app.get('/v1/questionhighlight', (req, res) => {
        // lesson, server
        req.brainly(async brainly => {
            brainly.findQuestionHighlight(req.query.lesson).then(result => {
                res.send(result.raw);
            }).catch(err => {
                console.log(err);
            });
        });
    });

    app.get('/', (req, res) => {
        let renderedList = '<ul>';

        for (const route of app._router.stack) {
            if (route.route === undefined) continue;

            renderedList +=  `<li><a href="${route.route.path}">${route.route.path}</a></li>`;
        }

        renderedList += '</ul>';

        res.send(`
            <h3>BrainlyAPI portable server. Explore now!</h3>
            ${renderedList}
        `);
    });
};