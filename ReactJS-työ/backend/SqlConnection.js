const express = require('express');
const PORT = 8000;
const HOST = '127.0.0.1';
const app = express();
const mysql = require('mysql');

// 
app.listen(PORT, HOST, function() {
  console.log("server up and running @ http://" + HOST + ":" + PORT);
});
app.get('/', function(req, res) {
  console.log("Hetkinen");
  res.send("Valmiit osoitteet: /luotietokanta, /tietokannankautto, /luotaulu, /lisaatauluun, /paivitys, /poista");
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
  app.get('/luotietokanta', (req, res) => {
    let sql = 'CREATE DATABASE db';
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Tietokanta luotu...');
        
    });
});

//muutetaan tietokantaa
app.get('/tietokannankautto', (req, res) => {
  let sql = 'USE db';
  con.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Tietokanta aktivoitu...');
      
  });
});
// luodaan taulu
app.get('/luotaulu', (req, res) => {
  let sql = "CREATE TABLE registration(id int not null PRIMARY KEY, first varchar(255) , last varchar(255), age int);";
  con.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Taulu luotu...');
      
      
  });
});




// lisätään tauluun
app.get('/lisaatauluun', (req, res) => {
  let sql = "INSERT INTO registration(id,first, last, age) VALUES(1,'Aku','Ankka',45);";
  con.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Tiedot lisattu...');
      
      
  });
});

// Päivitetään taulua
app.get('/paivitys', (req, res) => {
  let newTitle = 'Hessu';
  let sql = `UPDATE registration SET first = '${newTitle}' WHERE id = 1`;
  con.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Tiedot paivitettu..');
      
      
  });
});




 // Poisto operaatio
app.get('/poista', (req, res) => {
  let sql = "DELETE FROM registration WHERE id = 1";
  con.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Tiedot poistettu');
      con.end();
      
  });
});


 


    






