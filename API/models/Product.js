const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    ram: {
        type: String,
        default: null
    },
    currentPrice: {
        type: Number,
        required: true
    },
    oldPrice: {
        type: Number,
        required: true
    },
    rootPrice: {
        type: Number,
        required: true
    },
    memories: [
        {
            memory: {
                type: Number,
                required: true
            },
            additionPrice: {
                type: Number,
                required: true
            }
        }
    ],
    tag: {
        type: String,
        default: ''
    },
    quantity: {
        type: Number,
        required: true
    },
    colors: [
        {
            colorCode: {
                type: String,
                required: true
            },
            colorName: {
                type: String,
                required: true
            },
            additionPrice: {
                type: Number,
                required: true
            },
            colorImagePath: {
                type: String,
                required: true
            }
        }
    ],
    onSale: {
        type: Boolean,
        default: false
    },
    properties: [
        {
            name: {
                type: String,
                required: true
            },
            additionPrice: {
                type: Number,
                required: true
            }
        }
    ],
    tags: {
        type: Array,
        default: []
    },
    relatedTo: {
        type: Array,
        default: []
    }
},{timestamps: true})
module.exports = mongoose.model("Product", ProductSchema);