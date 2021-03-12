const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    subtitle: {
        type: String,
        required: true,
        trim: true 
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = model('Service', serviceSchema);