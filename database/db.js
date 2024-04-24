const mongoose = require("mongoose")
require ("dotenv").config()

const connectdb = async () => {

    try{
        const connect = await mongoose.connect(process.env.MONGODB)
        console.log("database connected successfully")
    } catch (error) {
        console.log(error)

    }
}

module.exports = connectdb