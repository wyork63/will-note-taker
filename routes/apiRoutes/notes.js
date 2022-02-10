const router = require('express').Router();

const res = require('express/lib/response');
const fs = require('fs');
let db = require('../../db/db.json');

// add get requests here to pull notes
router.get('/notes', (req, res) => {
    db = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))

    res.json(db)
});

// // add post request here which adds info
router.post('/notes', (req, res) => {
    const { title, text } = req.body;
    // set a unique id to the note being written 
    const id = Math.floor(Math.random() * 10000)

    db.push({ title, text, id })
    // db,null, 3 helps format the json file
    fs.writeFile('./db/db.json', JSON.stringify(db, null, 3), (err) => {
        if (err) throw err;

        res.json(db);
});
});

// deleting note route 
router.delete('/notes/:id', (req, res) => {
    let newDb = []
    for (let i = 0; i < db.length; i++) {
        // if id doesnt match the one we want to delete - it gets pushed into newdb 
        if (db[i].id !=req.params.id) {
            newDb.push(db[i])
        }
    }
    db = newDb
    fs.writeFile('./db/db.json', JSON.stringify(db, null, 3), (err) => {
        if (err) throw err;

        res.json(db);
});
});

module.exports = router;