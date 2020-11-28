const to = require('await-to-js').default;

const config = require('../config/languages');

const Project = require('../models/Project');

module.exports = (app) => {
    app.get('/', async (req, res) => {
        const { lang } = req.query;

        console.log(lang);

        return res.render('home', {
            locale: lang || 'ukr',
            ...config[lang || 'ukr'],
        });
    });

    app.get('/projects', async (req, res) => {
        const { lang } = req.query;

        console.log(lang);

        const [err, projects] = await to(Project.find({}));

        return res.render('projects', {
            locale: lang || 'ukr',
            ...config[lang || 'ukr'],
            projects: [],
        });
    });

    app.get('/about', async (req, res) => {
        const { lang } = req.query;

        console.log(lang);

        return res.render('about', {
            locale: lang || 'ukr',
            ...config[lang || 'ukr'],
        });
    });
};
