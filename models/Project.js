const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProjectSchema = new Schema(
    {
        name: {
            type: mongoose.SchemaTypes.String,
            required: true,
        },
        description: {
            type: mongoose.SchemaTypes.String,
            required: true,
        },
        isLess: {
            type: mongoose.SchemaTypes.Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

ProjectSchema.index({
    createdAt: 1,
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
