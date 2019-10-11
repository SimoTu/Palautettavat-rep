"use strict";
var Athlete = require('./model/athlete.js');

var dbUrl = "mongodb://localhost:27017/athletics";

class Database {
  constructor() {
    this.mongoose = require('mongoose');
        
    console.log("trying to connect mongodb database");
    
    //
    this.mongoose.connect(dbUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      })
      .then(() => console.log('DB Connected!'))
      .catch(err => {
      console.log('DB Connection Error: ${err.message}');
      });

    //
    this.db = this.mongoose.connection;
    this.db.on('error', console.error.bind(console, 'connection error:'));
    this.db.once('open', function() {
      console.log("we're connected!");
    });
  }
  
  getAll(callback) {
    console.log("get all athletes from mongodb")
    Athlete.find(function(err, athletes) {
      if(err) {
        callback({operation: "failed"});
      } else {
        console.log("got", athletes);
        callback(athletes);
      }
    }).sort({age: 1});
  }

  postOne(user, callback) {
    console.log("post one athlete to mongodb");
    Athlete.insertMany(user, function(err, athletes) {
      if(err) {
        callback({operation: "failed"});
      } else {
        console.log("added", athletes);
        callback(athletes);
      }
    });
  }
  
};

module.exports = Database;