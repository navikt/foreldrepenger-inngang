require('dotenv').config();
const path = require('path');
const mustacheExpress = require('mustache-express');

const configureDevServer = (decoratorFragments) => ({
    setupMiddlewares: (middlewares, devServer) => {
        devServer.app.engine('html', mustacheExpress());
        devServer.app.set('views', `${__dirname}/../../../dist/dev`);
        devServer.app.set('view engine', 'mustache');
        devServer.app.get(['/dist/settings.js'], (_req, res) => {
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
        devServer.app.get(/^\/(?!.*dist).*$/, (_req, res) => {
            res.render('index.html', Object.assign(decoratorFragments));
        });

        return middlewares;
    },
    client: {
        logging: 'info',
    },
    devMiddleware: {
        index: true,
        stats: 'minimal',
        publicPath: '/dist',
    },
    static: {
        directory: path.resolve(__dirname, '../../../dist/dev'),
        serveIndex: true,
        watch: true,
    },
});

module.exports = configureDevServer;
