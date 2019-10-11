const express = require('express');
const Database = require('./database.js');
const bodyParser = require('body-parser');

const connection = new Database();
const app = express();
const port = 8080;

var cors = require('cors');

// CORS-middlewaren käyttöönotto
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  res.header("Access-Control-Allow-Methods","PUT,POST,PATCH,DELETE,GET");

  if(req.method === 'OPTIONS') {
    res.header("Access-Control-Allow-Methods","PUT,POST,PATCH,DELETE,GET");
   return res.status(200).json({});
  }
  next();
});
// Sallitaan pääsy selaimen tarvitsemiin tiedostoihin
app.use(express.static(__dirname+'/client')); 

app.get('/api/v1/athletes', (req, res) => {
  console.log("GET /api/v1/athletes");
  // TODO: tee mongoose.js-kirjastoa käyttäen kysely mongodb-tietokantaan
  connection.getAll(function(athletes) {
    res.send(athletes)
  })
});
  
app.post('/api/v1/athletes', (req, res, next) => {
  var user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    birth: req.body.birth,
    nickname: req.body.nickname,
    weight: req.body.weight,
    sports: req.body.sports,
    stats: req.body.stats,
    img: req.body.img,      };

    connection.postOne(user, function(req) {
      res.status(201).json({
        message: 'User was created',
        object: user    
    });
    })
});

app.listen(port, '0.0.0.0', () => console.log(`Example app listening on port ${port}!`));