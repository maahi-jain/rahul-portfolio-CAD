const { Schema, model } = require('mongoose')

const CategorySchema = new Schema({
    name: {
        type: string,
        required: true
    }
});

export const Category = model('Category', CategorySchema);

