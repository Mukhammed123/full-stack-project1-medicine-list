const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// Add post
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        number: req.body.number,
        name: req.body.name,
        price: req.body.price,
        classFirstStroke: req.body.classFirstStroke,
        remark: req.body.remark,
        composition: req.body.composition,
    });
    res.status(201).send();
});


// Delete post
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne( {_id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
});

// Update post
router.put('/update/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.updateOne( {_id: new mongodb.ObjectID(req.params.id) }, { $set: {
        number: req.body.number,
        name: req.body.name,
        price: req.body.price,
        classFirstStroke: req.body.classFirstStroke,
        remark: req.body.remark,
        composition: req.body.composition,
    } }, { upsert: true });
    res.status(201).send();
})


async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://localhost/medicalAI');

    return client.db('medicalAI').collection('sheet-ones');
}



// ==================  Second sheet  ==================
// GET posts
router.get('/second-sheet', async (req, res) => {
    const posts = await loadPostsCollection2();
    res.send(await posts.find({}).toArray());
});

// // Add post
router.post('/second-sheet', async (req, res) => {
    const posts = await loadPostsCollection2();
    await posts.insertOne({
        number: req.body.number,
        name: req.body.name,
        price: req.body.price,
        classFirstStroke: req.body.classFirstStroke,
        remark: req.body.remark,
        composition: req.body.composition,
    });
    res.status(201).send();
});


// Delete post
router.delete('/second-sheet/:id', async (req, res) => {
    const posts = await loadPostsCollection2();
    await posts.deleteOne( {_id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
})

// Update post
router.put('/second-sheet/update/:id', async (req, res) => {
    const posts = await loadPostsCollection2();
    await posts.updateOne( {_id: new mongodb.ObjectID(req.params.id) }, { $set: {
        number: req.body.number,
        name: req.body.name,
        price: req.body.price,
        classFirstStroke: req.body.classFirstStroke,
        remark: req.body.remark,
        composition: req.body.composition,
    }}, { upsert: true });
    res.status(201).send();
})

async function loadPostsCollection2() {
    const client = await mongodb.MongoClient.connect('mongodb://localhost/medicalAI');

    return client.db('medicalAI').collection('sheet-twos');
}

module.exports = router;