const { Schema, model } = require('mongoose');

const comboServiceSchema = new Schema({
    name: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
})

module.exports = model('ComboService', comboServiceSchema);