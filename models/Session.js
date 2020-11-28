const mongoose = require('mongoose');

const { Schema } = mongoose;

const SessionSchema = new Schema(
    {
        uuid: {
            type: mongoose.SchemaTypes.String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

SessionSchema.index(
    {
        createdAt: 1,
    }
);

const Session = mongoose
    .model('Session', SessionSchema);

module.exports = Session;
