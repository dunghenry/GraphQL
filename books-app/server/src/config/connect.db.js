const mongoose = require('mongoose');
const logEvents = require('../helpers/logEvents');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            autoIndex: true,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected DB successfully');
    } catch (error) {
        console.log('Error connecting DB');
        await logEvents(error.message, module.filename);
        process.exit(1);
    }
}
process.on('SIGINT', async () =>{
    console.log('Killed server and disconnected DB');
    await mongoose.connection.close();
    process.exit(0);
})
module.exports = connectDB;