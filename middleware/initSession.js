const session = require('express-session');

/* Adding the express session middleware */
module.exports = app => {
    app.use(
        session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true,
            cookie: { maxAge: 24 * 60 * 60 * 1000 },
        })
    );
};
