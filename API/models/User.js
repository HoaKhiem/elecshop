const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    userPassword: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    userEmail: {
        type: String,
        required: true
    },
    userFullName: {
        type: String,
        default: ''
    },
    userDateOfBirth: {
        type: String,
        default: ''
    },
    userImagePath: {
        type: String,
        default: ''
    },
    userPhoneNumber: {
        type: String,
        default: ''
    },
    userDeliveryInformation: [
        {
            adress: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            note: {
                type: String,
                default: ''
            }
        }
    ]
}, {timestamps: true})
module.exports = mongoose.model("User", userSchema);