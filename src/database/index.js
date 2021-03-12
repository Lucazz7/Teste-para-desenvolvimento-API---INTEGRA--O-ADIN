const mongoose = require('mongoose');


    //Conexão com banco de dados
    mongoose.connect("mongodb://localhost/noderest", 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
    mongoose.Promise = global.Promise;

module.exports = mongoose;