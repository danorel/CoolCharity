const path = require('path');
const express = require('express');

module.exports = (app, dirname) => {
    app.set('views', path.join(dirname, 'views'));
    app.set('view engine', 'pug');

    app.use(
        express
            .static(path.join(dirname, 'public'))
    );
};