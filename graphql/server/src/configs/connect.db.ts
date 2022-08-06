import mongoose from "mongoose";
mongoose.connect(process.env.MONGODB_URI, {

}).then(() => console.log('Connected to MongoDB successfully.'))
    .catch(() => console.log('Connected to MongoDB failed.'));