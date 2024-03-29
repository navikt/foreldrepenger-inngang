const fs = require('fs');
const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const Promise = require('promise');
const getDecorator = require('./src/build/scripts/decorator');
const morgan = require('morgan');

const serveGzipped = (contentType) => (req, res, next) => {
    const acceptedEncodings = req.acceptsEncodings();
    const gZippedFile = `${__dirname}${req.url}.gz`;

    if (acceptedEncodings.includes('gzip') && fs.existsSync(gZippedFile)) {
        req.url = `${req.url}.gz`;
        res.set('Content-Encoding', 'gzip');
        res.set('Content-Type', contentType);
    }

    next();
};

const renderApp = (decoratorFragments) =>
    new Promise((resolve, reject) => {
        server.render('index.html', decoratorFragments, (err, html) => {
            if (err) {
                reject(err);
            } else {
                resolve(html);
            }
        });
    });

const startServer = (html) => {
    server.use('/dist/js', express.static(path.resolve(__dirname, 'dist/js')));
    server.use('/dist/css', express.static(path.resolve(__dirname, 'dist/css')));
    server.use('/dist/assets', express.static(path.join(__dirname, 'dist/assets')));
    server.use('/sitemap.xml', express.static(path.join(__dirname, 'dist/sitemap.xml')));

    server.get(['/dist/settings.js'], (_req, res) => {
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

    server.get('/health/isAlive', (_req, res) => res.sendStatus(200));
    server.get('/health/isReady', (_req, res) => res.sendStatus(200));

    server.get(/^\/(?!.*dist).*$/, (_req, res) => {
        res.send(html);
    });

    const port = process.env.PORT || 8080;
    server.listen(port, () => {
        console.log(`App listening on port: ${port}`);
    });
};

const logError = (errorMessage, details) => console.log(errorMessage, details);

// Konfigurer server
const server = express();

server.set('views', `${__dirname}/dist`);
server.set('view engine', 'mustache');
server.engine('html', mustacheExpress());
server.use(morgan('tiny'));

server.use((_req, res, next) => {
    res.removeHeader('X-Powered-By');
    res.set('X-Frame-Options', 'SAMEORIGIN');
    res.set('X-XSS-Protection', '1; mode=block');
    res.set('X-Content-Type-Options', 'nosniff');
    res.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

server.get('*.js', serveGzipped('text/javascript'));
server.get('*.css', serveGzipped('text/css'));

// Start server
getDecorator()
    .then(renderApp, (error) => {
        logError('Failed to get decorator', error);
        process.exit(1);
    })
    .then(startServer, (error) => logError('Failed to render app', error));
