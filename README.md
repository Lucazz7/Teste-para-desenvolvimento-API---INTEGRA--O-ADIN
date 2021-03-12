# Teste Para desenvolvimento API - INTEGRAÇÃO ADIM

* Ferramentas utilizada no projeto.
    + Visual Studio Code.
    + NodeJs.
    + Banco de dados MongoDB.
    + Teste De API REST Insomnia.


## Criação da rota

<code> 
const express = require('express');
const bodyParser = require ('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);

app.listen(5000);
</code>

## Conexão banco de dados

<code> 
const mongoose = require('mongoose');

    mongoose.connect("mongodb://localhost/noderest", 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
    mongoose.Promise = global.Promise;

module.exports = mongoose;
</code>

## Tabela do Banco de dados

<code> 
const mongoose = require('../database');

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
</code>


## REST POST GET PUT DELETE

<code> 
const express = require('express');

const User = require('../models/user');

const router = express.Router();

//POST
router.post('/', async (req, res) => {
    try{
        const user = await User.create (req.body);

        return res.send({ user });
    }catch(err) { 
        return res.status(400).send({ error: 'Resgistration failed' });
    }
});

//GET Listar.
router.get('/', async (req, res) => {
    try{
        const user = await User.find();

        return res.send({ user });
    }catch(err){
        return res.status(400).send({ error: 'error lodding projects' });
    }
});

//GET pesquisar por id.
router.get('/:projectId', async (req, res) => {
    try{
        const user = await User.findById(req.params.projectId);

        return res.send({ user });
    }catch(err){
        return res.status(400).send({ error: 'error lodding projects' });
    }
});

//PUT Update.
router.put('/:projectId', async (req, res) => {
    try{
        const { name, description, tags } = req.body;

        const user = await user.findByIdAndupdate(req.params.projectId, {
            nome, description 
        },{new: true});
    }
    catch(err){
        return res.status(400).send({ error: 'error lodding projects' });
    }
});

//Delete.
router.delete('/:userId', async (req, res) => {
    try{
        const user = await User.findOneAndDelete(req.params.projectId);

        return res.send({ user });
    }catch(err){
        return res.status(400).send({ error: 'error lodding projects' });
    }
});


module.exports = app => app.use('/tools', router);
</code>