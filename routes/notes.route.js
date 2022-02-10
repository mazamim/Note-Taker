const router = require('express').Router();
const { readFromFile, readAndAppend,readAndDeleteFile } = require('../helper/fsutil');
 const { v4: uuidv4 } = require('uuid');

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
        id: uuidv4(),
        title,
        text,
       
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`added successfully`);
    } else {
      res.error('Error in adding');
    }
  });


  router.delete("/:id",(req,res)=>{
   const id= req.params.id
 
   readAndDeleteFile(id,'./db/db.json');
   res.json(`Deleted successfully`);


   
  })


  module.exports = router;