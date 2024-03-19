const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/usersAPI";

mongoose.connect(mongoURI, {
}).then(() => {
    console.log('Connected successfully to MongoDB database');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
