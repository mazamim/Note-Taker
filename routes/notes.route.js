const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helper/fsutil');
// const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the tips
router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

  // POST Route for a new UX/UI tip
  router.post('/', (req, res) => {
    console.log(req.body);
  
    const { title,text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        // tip_id: uuidv4(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Tip added successfully 🚀`);
    } else {
      res.error('Error in adding tip');
    }
  });


  module.exports = router;