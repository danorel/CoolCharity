const initLogging = require('./middleware/initLogging');
const initSession = require('./middleware/initSession');
const initParsers = require('./middleware/initParsers');

module.exports = app => {
    initParsers(app);
    initLogging(app);
    initSession(app);
};
