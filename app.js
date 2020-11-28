const initApp = require('./init');
const initRoutes = require('./routes/index');
const initStatic = require('./middleware/initStatic');
const initMicroservices = require('./middleware/initMicroservices');

/* Read environment config variables */
switch (process.env.NODE_ENV) {
    case 'development':
        require('dotenv')
            .config({ path: __dirname + '/environment/development/.env' });
        break;

    case 'production':
        require('dotenv')
            .config({ path: __dirname + '/environment/production/.env' });
        break;

    default:
        console.error("Defined unknown application mode. Available: development/production");
        break;
}

const {
    configMongo
} = require('./config/microservices');

const express = require('express');
const app = express();

initApp(app);
initRoutes(app);
initMicroservices(configMongo.connection);
initStatic(app, __dirname);

app.listen(process.env.PORT,
    () => console.log(`Starting the server on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`));

module.exports = app;
