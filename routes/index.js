const to = require('await-to-js').default;
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const configLanguages = require('../config/languages'),
    configApplication = require('../config/application');

const Project = require('../models/Project'),
    Application = require('../models/Application');

let transporter = nodemailer.createTransport({
    host: 'mail.google.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.GMAIL_LOGIN, // generated ethereal user
        pass: process.env.GMAIL_PASSWORD, // generated ethereal password
    },
    service: 'gmail',
});

module.exports = (app) => {
    app.get('/', async (req, res) => {
        const { lang } = req.query;

        return res.render('home', {
            locale: lang || 'ukr',
            ...configLanguages[lang || 'ukr'],
        });
    });

    app.get('/projects', async (req, res) => {
        const { lang, id } = req.query;

        /*
         * Any show less/more events were triggered?
         * Find one project and update status.
         * Mongoose Error 500.
         */
        if (id) {
            const [errFindById, project] = await to(
                Project.findById(new mongoose.Types.ObjectId(id)),
            );
            if (errFindById) throw errFindById;

            const [errFindOneAndUpdate] = await to(
                Project.findOneAndUpdate(
                    {
                        _id: new mongoose.Types.ObjectId(id),
                    },
                    {
                        $set: {
                            isLess: !project.isLess,
                        },
                    },
                    {
                        upsert: true,
                        new: true,
                    },
                ),
            );
            if (errFindOneAndUpdate) throw errFindOneAndUpdate;
        }

        /*
         * Find all projects in the list.
         * Mongoose Error 500.
         */
        const [errFind, projectsAll] = await to(Project.find({}));
        if (errFind) throw errFind;

        return res.render('projects', {
            locale: lang || 'ukr',
            project: projectsAll.map((p) => {
                return {
                    _id: p._id,
                    name: p.name,
                    description: p.isLess ? `${p.description.slice(0, 20)}...` : p.description,
                    isLess: p.isLess,
                };
            }),
            ...configLanguages[lang || 'ukr'],
        });
    });

    app.get('/about', async (req, res) => {
        const { lang } = req.query;

        return res.render('about', {
            locale: lang || 'ukr',
            ...configLanguages[lang || 'ukr'],
        });
    });

    app.post('/', async (req, res) => {
        const { lang } = req.query;
        const { email, donation } = req.body;

        const [errNew] = await to(
            new Application({
                email,
                donation,
                isApproved: configApplication.autoApplication,
            }).save(),
        );
        if (errNew) throw errNew;

        return res.render('home', {
            locale: lang || 'ukr',
            ...configLanguages[lang || 'ukr'],
        });
    });

    app.get('/admin', async (req, res) => {
        const { lang } = req.query;

        /*
         * Find all projects in the list.
         * Mongoose Error 500.
         */
        const [errFind, projectsAll] = await to(Project.find({}));
        if (errFind) throw errFind;

        return res.render('admin', {
            locale: lang || 'ukr',
            project: projectsAll.map((p) => {
                return {
                    _id: p._id,
                    name: p.name,
                    description: p.description,
                    isLess: p.isLess,
                };
            }),
            ...configLanguages[lang || 'ukr'],
        });
    });

    app.get('/admin/applications', async (req, res) => {
        const { lang } = req.query;

        /*
         * Find all projects in the list.
         * Mongoose Error 500.
         */
        const [errFind, applicationAll] = await to(
            Application.find({
                isApproved: false,
            }),
        );
        if (errFind) throw errFind;

        return res.render('admin-applications', {
            locale: lang || 'ukr',
            application: applicationAll.map((a) => {
                return {
                    _id: a._id,
                    email: a.email,
                    donation: a.donation,
                };
            }),
            ...configLanguages[lang || 'ukr'],
        });
    });

    app.post('/admin/applications', async (req, res) => {
        const { id, lang } = req.query;

        const [errFindById, application] = await to(
            Application.findByIdAndUpdate(new mongoose.Types.ObjectId(id), {
                $set: {
                    isApproved: true,
                },
            }),
        );
        if (errFindById) throw errFindById;

        const [errSend] = await to(
            transporter.sendMail({
                from: process.env.GMAIL_LOGIN, // sender address
                to: application.email, // list of receivers
                subject: 'Hello ✔', // Subject line
                text: 'Thank you for your application! You were approved successfully', // plain text body
                html: 'Thank you for your application! You were <b>approved</b> successfully!', // html body
            }),
        );
        if (errSend) throw errSend;

        /*
         * Find all projects in the list.
         * Mongoose Error 500.
         */
        const [errFind, applicationAll] = await to(
            Application.find({
                isApproved: false,
            }),
        );
        if (errFind) throw errFind;

        return res.render('admin-applications', {
            locale: lang || 'ukr',
            application: applicationAll.map((a) => {
                return {
                    _id: a._id,
                    email: a.email,
                    donation: a.donation,
                };
            }),
            ...configLanguages[lang || 'ukr'],
        });
    });

    app.post('/admin', async (req, res) => {
        const { id, lang, operation } = req.query;
        const { name, description } = req.body;

        switch (operation) {
            case 'remove':
                const [errRemove] = await to(
                    Project.findByIdAndDelete(new mongoose.Types.ObjectId(id)),
                );
                if (errRemove) throw errRemove;
                break;

            case 'create':
                const [errNew] = await to(
                    new Project({
                        name,
                        description,
                        isLess: true,
                    }).save(),
                );
                if (errNew) throw errNew;
                break;

            default:
                break;
        }

        /*
         * Find all projects in the list.
         * Mongoose Error 500.
         */
        const [errFind, projectsAll] = await to(Project.find({}));
        if (errFind) throw errFind;

        return res.render('admin', {
            locale: lang || 'ukr',
            project: projectsAll.map((p) => {
                return {
                    _id: p._id,
                    name: p.name,
                    description: p.description,
                    isLess: p.isLess,
                };
            }),
            ...configLanguages[lang || 'ukr'],
        });
    });
};
