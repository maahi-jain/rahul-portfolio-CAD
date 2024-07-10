const { Schema, model } = require("mongoose");

const DesignSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    files: [{
        key: {
            type: String,
            required: true
        },
        fileType: {
            type: String,
            required: true
        }
    }],
    folderName: {
        type: String,
        required: true
    }
})

const Design = model('Design', DesignSchema);

module.exports.default = Design;

