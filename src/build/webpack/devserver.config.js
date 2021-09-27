require('dotenv').config();
const mustacheExpress = require('mustache-express');
var path = require('path');

const configureDevServer = (decoratorFragments) => ({
    before: (app) => {
        app.engine('html', mustacheExpress());
        app.set('views', `${__dirname}/../../../dist/dev`);
        app.set('view engine', 'mustache');
        app.get(['/dist/settings.js'], (_req, res) => {
            res.set('content-type', 'application/javascript');
            res.send(`window.appSettings = {
                SOK_FORELDREPENGER_URL: '${process.env.SOK_FORELDREPENGER_URL}',
                SOK_FORELDREPENGER_PAPIR_URL: '${process.env.SOK_FORELDREPENGER_PAPIR_URL}',
                SOK_ENGANGSSTONAD_URL: '${process.env.SOK_ENGANGSSTONAD_URL}',
                SOK_ENGANGSSTONAD_PAPIR_URL: '${process.env.SOK_ENGANGSSTONAD_PAPIR_URL}',
                DINE_FORELDREPENGER_URL: '${process.env.DINE_FORELDREPENGER_URL}',
                SOK_SVANGERSKAPSPENGER_URL: '${process.env.SOK_SVANGERSKAPSPENGER_URL}',
                SOK_SVANGERSKAPSPENGER_PAPIR_URL: '${process.env.SOK_SVANGERSKAPSPENGER_PAPIR_URL}',
                PLANLEGGEREN_URL: '${process.env.PLANLEGGEREN_URL}'
            };`);
        });
        app.get(/^\/(?!.*dist).*$/, (_req, res) => {
            res.render('index.html', Object.assign(decoratorFragments));
        });
    },
    watchContentBase: true,
    quiet: false,
    noInfo: false,
    stats: 'minimal',
    publicPath: '/dist',
});

module.exports = configureDevServer;
