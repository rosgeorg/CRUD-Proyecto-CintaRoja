// Database
const mongoose = require('mongoose');

const DB_URI = "mongodb+srv://JSmongo:qwer456@cluster0-uof7i.gcp.mongodb.net/proyecto?retryWrites=true&w=majority";

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then( () => console.log("-Succesful connection to database-"))
        .catch( err => console.log(err) );