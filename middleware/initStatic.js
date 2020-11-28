const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

module.exports = (app, dirname) => {
    app.use(express.static(path.join(dirname, '/public')));
    app.engine(
        'hbs',
        exphbs({
            defaultLayout: 'main',
            extname: '.hbs',
            helpers: {
                eq: (a, b, strTrue, strFalse) => {
                    return a === b ? strTrue : strFalse;
                },
            },
        }),
    );
    app.set('view engine', 'hbs');
};
