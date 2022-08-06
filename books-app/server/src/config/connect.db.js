const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB successfully.'))
    .catch(() => console.log('Connected to MongoDB failed.'));