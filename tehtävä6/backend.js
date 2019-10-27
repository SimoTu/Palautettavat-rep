var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const express = require('express');
const PORT = 8000;
const HOST = '127.0.0.1';
const app = express();
const bodyParser = require('body-parser');



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


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
//luodaan 5x5 taulukko




// kuunnellaan porttia... ja laitetaan osoitteeseen menemään taulukko
app.listen(PORT, HOST, function() {
  console.log("server up and running @ http://" + HOST + ":" + PORT);
});
app.get('/random', function(req, res) {
  var Grid = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
  ];
  
  
  
  //käytetään if rakennetta ja arvotaan laivojen paikka vaihtoehtoja
  var arvo = 1 + Math.floor(Math.random() * 5);
  
  if(arvo == 1){
    Grid[1][4] =  1
    Grid[2][4] =  1
    Grid[3][4] =  1
  
  }
  
  if(arvo == 2){
    Grid[2][2] =  1
    Grid[3][2] =  1
    Grid[4][2] =  1
  
  }
  
  if(arvo == 3){
    Grid[4][1] =  1
    Grid[4][2] =  1
    Grid[4][3] =  1
  
  }
  
  if(arvo == 4){
    Grid[2][3] =  1
    Grid[3][3] =  1
    Grid[4][3] =  1
  
  }
  
  if(arvo == 5){
    Grid[0][0] =  1
    Grid[0][1] =  1
    Grid[0][2] =  1
  
  }

  console.log("Hetkinen");
  res.send(Grid);

});

// luodaan promise ja haetaan data
const promise = new Promise((resolve, reject) => {
  const request = new XMLHttpRequest();

  request.open('GET', 'http://127.0.0.1:8000/random');
  request.onload = () => {
    if (request.status === 200) {
      resolve(request.responseText); 
      console.log(request.responseText)// we got data here, so resolve the Promise
    } else {
      reject(Error(request.statusText)); // status is not 200 OK, so reject
    }
  };

  request.onerror = () => {
    reject(Error('Error fetching data.')); // error occurred, reject the  Promise
  };

  request.send(); // send the request
});

console.log('Asynchronous request made.');

promise.then((data) => {
  
  console.log(JSON.parse(data));
 
}, (error) => {
  console.log('Promise rejected.');
  console.log(error.message);
});


 


    






