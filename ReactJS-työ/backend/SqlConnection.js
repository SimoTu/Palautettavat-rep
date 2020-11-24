const express = require('express');
const PORT = 8000;
const HOST = '127.0.0.1';
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



//turvallisuusohitus
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
 
  next();
 
  });




//Asettaa portin metodiin ja printtaa linkin porttiin 
app.listen(PORT, HOST, function() {
  console.log("server up and running @ http://" + HOST + ":" + PORT);
});
app.get('/', function(req, res) {
  console.log("Hetkinen");
  res.send("Aloitussivu");
});



// luodaan yhteys
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Makkaraperunat1"
  });



//yhdistetään
con.connect(function(err) {
  if (err) throw err;
  console.log("Yhdistetty!");
  });



//luodaan tietokanta
  app.post('/create/:db', (req, res) => {
    let sql = `CREATE DATABASE ${req.params.db}`;
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(`Tietokanta luotu...${req.params.db}`);
        
    });
});


//käytetään tietokantaa
app.get('/use/:db', (req, res) => {
  let sql = `USE ${req.params.db}`;
  con.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send(`Tietokanta aktivoitu...${req.params.db}`);
      
  });
});



//valitaan kaikki henkilöt
app.get('/hae', (req, res) => {
  let sql = `SELECT * FROM PERSONS;`;
  con.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      return res.send(result);
      
  });
});



//tietty henkilö
app.get('/users/:tbl/:ID', (req, res) => {
  let sql = `SELECT * FROM ${req.params.tbl} WHERE id = ${req.params.ID};`;
  con.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      return res.send({ data:result,});
      
  });
});




// luodaan taulu
app.post('/createTBL/:tbl', (req, res) => {
  let sql = `CREATE TABLE ${req.params.tbl}(id int not null PRIMARY KEY, first VARCHAR(255), last VARCHAR(255), age int)`;
  con.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send(`Taulu luotu...${req.params.tbl}`);
      
      
  });
});




// lisätään tauluun
app.post('/add/:tbl/:ID/:first/:last/:age', (req, res) => {
  let sql =`INSERT INTO ${req.params.tbl} (id, first, last, age) VALUES (${req.params.ID},'${req.params.first}','${req.params.last}',${req.params.age});`;
  con.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send(`Lisattu tauluun...${req.params.tbl}... id=${req.params.ID}, etunimi:'${req.params.first}', sukunimi:'${req.params.last}', ika= ${req.params.age}`);
      
      
  });
});



// Päivitetään taulun arvoja
app.put('/update/:tbl/:uusiEtu/:last/:age/:ID', (req, res) => {
  let sql = `UPDATE ${req.params.tbl} SET first = '${req.params.uusiEtu}', last = '${req.params.last}', age = ${req.params.age} WHERE id = ${req.params.ID};`;
  con.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send(`Tiedot paivitettu tauluun... ${req.params.tbl}... etunimi = '${req.params.uusiEtu}', sukunimi = '${req.params.last}', ika = ${req.params.age} kenella on id = ${req.params.ID}`);
      
      
  });
});




 // Poisto operaatio
app.delete('/delete/:tbl/:ID', (req, res) => {
  
  let sql = `DELETE FROM ${req.params.tbl} WHERE id = ${req.params.ID}`;
  con.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Tiedot poistettu...');
      
      
  });
});


 


    






