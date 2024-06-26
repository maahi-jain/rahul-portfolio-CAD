const mongoose = require('mongoose');

const connectToDb = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("connected"));
        let result = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@rahul-portfolio.pi8mehf.mongodb.net/?retryWrites=true&w=majority&appName=rahul-portfolio`);
        return Promise.resolve(result);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { connectToDb };