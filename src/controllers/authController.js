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