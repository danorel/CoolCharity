const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = app => {
    /* Adding request parsers */
    app.use(cors());
    app.use(cookieParser());
    app.use(bodyParser());
    app.use(bodyParser.json());
    app.use(
        bodyParser.urlencoded({
            extended: true,
        }),
    );
};
