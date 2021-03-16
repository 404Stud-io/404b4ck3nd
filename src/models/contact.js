const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trime: true
    }
},
    {
        timestamps:true,
        versionKey: false
    }
);

module.exports = model('Contact', contactSchema);
