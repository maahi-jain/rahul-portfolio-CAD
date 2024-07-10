const { Schema, model } = require('mongoose')

const CategorySchema = new Schema({
    name: {
        type: string,
        required: true
    }
});

const Category = model('Category', CategorySchema);

module.exports.default = Category

