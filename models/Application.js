const mongoose = require('mongoose');

const { Schema } = mongoose;

const ApplicationSchema = new Schema(
    {
        email: {
            type: mongoose.SchemaTypes.String,
            required: true,
        },
        donation: {
            type: mongoose.SchemaTypes.Number,
            required: true,
        },
        isApproved: {
            type: mongoose.SchemaTypes.Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

ApplicationSchema.index({
    createdAt: 1,
});

const Project = mongoose.model('Application', ApplicationSchema);

module.exports = Project;
