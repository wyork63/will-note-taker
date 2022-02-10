const router = require('express').Router();

const res = require('express/lib/response');
const fs = require('fs');
const db = require('../../db/db.json');

// add get requests here to pull notes
router.get('/notes', (req, res) => {
    res.json(db)
})

// // add post request here which adds info
// router.post('/notes', req, res) => {
//     fs.writeFile('./db/db.json', JSON.stringify(notes)), (err, data) => {
//         if (err) throw err
//     }
// });
// res.json(notes)


module.exports = router; 