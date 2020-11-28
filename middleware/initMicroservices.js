const mongoose = require('mongoose');

module.exports = (connectionString) => {
    mongoose.connect(
        connectionString,
        {
            useNewUrlParser: true,
        },
        (err) => console.log(err),
    );
    const db = mongoose.connection;
    /* Check up the connection to our database */
    db.once('open',
        () => console.log('MongoDB was connected successfully!'));
    /* Check up for any errors in that connection */
    db.on('error',
        (err) => console.log(`Error with database may happened: ${err}`));
};
