const env = process.env.NODE_ENV || 'development';

const mode = (prod, dev) => {
    if (env === 'development') return dev;
    return prod;
};

const server = {
    protocol: mode('https', 'http'),
    host: mode('server', '127.0.0.1'),
    port: mode(5000, 5005),
};

const mongo = {
    connection: mode('mongodb://mongo/session-identifier', 'mongodb://localhost:27017/session-identifier'),
};

module.exports = {
    configMongo: mongo,
    configServer: server,
};
