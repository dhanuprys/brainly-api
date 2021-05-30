module.exports = function (app) {
    const underDevelopment = (req, res) => {
        res.send('Under development');
    }

    app.get('/v1/findquestion', underDevelopment);
    app.get('/v1/userprofile', underDevelopment);
    app.get('/v1/questionhighlight', underDevelopment);

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