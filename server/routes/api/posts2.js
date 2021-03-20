// ==================  Second sheet  ==================
const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection2();
    res.send(await posts.find({}).toArray());
});

// // Add post
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection2();
    await posts.insertOne({
        number: req.body.number,
        name: req.body.name,
        price: req.body.price,
        hicode: req.body.hicode,
        classFirstStroke: req.body.classFirstStroke,
        remark: req.body.remark,
        composition: req.body.composition,
    });
    res.status(201).send();
});


// Delete post
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection2();
    await posts.deleteOne( {_id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
})

// Update post
router.post('/:id', async (req, res) => {
    const posts = await loadPostsCollection2();
    posts.updateOne( {_id: new mongodb.ObjectID(req.params.id) }, { $set: {
        number: req.body.number,
        name: req.body.name,
        price: req.body.price,
        hicode: req.body.hicode,
        classFirstStroke: req.body.classFirstStroke,
        remark: req.body.remark,
        composition: req.body.composition,
    }}, (err, result) => {
        if(err) res.status(500).send(err);
        res.status(200).send();
    })
    
})

async function loadPostsCollection2() {
    const client = await mongodb.MongoClient.connect("mongodb+srv://Mukhammed:mukhammed123@cluster0.qhqbl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true
    });

    return client.db('medicalAI').collection('sheet-twos');
}


module.exports = router;