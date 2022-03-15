const express = require('express');
const router = express.Router();
const Dienst = require('./models/dienste');

// get all dienste
router.get('/dienste', async(req, res) => {
    const allDienste = await Dienst.find();
    console.log(allDienste);
    res.send(allDienste);
});

// post one dienste
router.post('/dienste', async(req, res) => {
    const newDienst = new Dienst({
        funktion: req.body.funktion,
        stunden: req.body.stunden,
        datum: req.body.datum,
        beginn: req.body.beginn,
        ende: req.body.ende
    })
    await newDienst.save();
    res.send(newDienst);
});

// get one dienste via id
router.get('/dienste/:id', async(req, res) => {
    try {
        const dienst = await Dienst.findOne({ _id: req.params.id });
        console.log(req.params);
        res.send(dienst);
    } catch {
        res.status(404);
        res.send({
            error: "Dienst existiert nicht!"
        });
    }
});

// update one member via id
router.patch('/dienste/:id', async(req, res) => {
    try {
        const dienst = await Dienst.findOne({ _id: req.params.id })

        if (req.body.funktion) {
            dienst.funktion = req.body.funktion
        }

        if (req.body.stunden) {
            dienst.stunden = req.body.stunden
        }

        if (req.body.datum) {
            dienst.datum = req.body.datum
        }

        if (req.body.beginn) {
            dienst.beginn = req.body.beginn
        }

        if (req.body.ende) {
            dienst.ende = req.body.ende
        }

        await Dienst.updateOne({ _id: req.params.id }, dienst);
        res.send(dienst)
    } catch {
        res.status(404)
        res.send({ error: "Dienst existiert nicht!" })
    }
});

// delete one dienste via id
router.delete('/dienste/:id', async(req, res) => {
    try {
        await Dienst.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Dienst existiert nicht!" })
    }
});

module.exports = router;
