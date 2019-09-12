var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "..."
  });

con.connect(function(err) {
  if (err) throw err;
  console.log("Yhdistetty!");
  sql= "CREATE DATABASE db";
    luoKysely(sql);
    luoKysely("USE db;");
    luoKysely("CREATE TABLE registration(id int not null PRIMARY KEY, first varchar(255) , last varchar(255), age int);");
    luoKysely("INSERT INTO registration(id,first, last, age) VALUES(1,'Aku','Ankka',45);");
    con.end();
  });



 function luoKysely(sql){

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("SQL-lause onnistui!");
    });



    
};