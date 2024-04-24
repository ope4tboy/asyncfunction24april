const mongoose = require ('mongoose')

const studentcShema = new  mongoose.Schema({
    name: {
        type : String,
        required : true
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        unique: true,
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('Student', studentcShema)