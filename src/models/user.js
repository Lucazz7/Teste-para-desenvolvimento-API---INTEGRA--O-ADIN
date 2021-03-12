const mongoose = require('../database');

//Tabela do Banco de dados
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: false,
    },
    link: {
        type: String,
        unique: true,
        required: false,
        lowercase: true,
    },
    description: {
        type: String,
        require: false,
    },
    tags: {
        type: Array,
        unique: true,
        required: false,
        lowercase: true,
},

});

const User = mongoose.model('User', UserSchema);

module.exports = User;