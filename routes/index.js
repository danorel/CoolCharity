const to = require('await-to-js').default;

const Session = require('../models/Session');

module.exports = app => {
    app.get(
        '/',
        async (req, res) => {
            let
                err,
                sessionOne,
                sessionAll;

            [err, sessionOne] = await to(
                Session
                    .findOne({
                        uuid: req.session.id
                    })
            );
            if (err) throw err;

            if (!sessionOne) {
                [err, sessionOne] = await to(
                    new Session({
                        uuid: req.session.id
                    }).save()
                );
                if (err) throw err;
            }

            [err, sessionAll] = await to(
                Session
                    .find({})
                    .count()
            );
            if (err) throw err;

            return res
                .render('index', {
                    title: 'Лічильник відвідувань',
                    counter: sessionAll
                });
        });
};