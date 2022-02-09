const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', api);


app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/404.html'))
);

app.listen(PORT,()=>{
    console.log(`running at http://localhost:${PORT}`)
})

