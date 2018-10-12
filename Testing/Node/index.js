
const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

var path = require('path');
var http = require("http");
var url = require("url");
var cors = require("cors");


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(path.join(__dirname, '../')));

app.options('*', cors()); 


// url: http://localhost:3000/
app.get('/', (request, response) => response.send('Hello World'));

// all routes prefixed with /api
app.use('/api', router);



// using router.get() to prefix our path
// url: http://localhost:3000/api/
router.get('/', (request, response) => {
  response.json({});
});

  router.get('/largeResults', (request, response) => {
    var urlParts = url.parse(request.url, true);
    var parameters = urlParts.query;
    var myParam = parameters.myParam;
    // e.g. myVenues = 12;
    
    
    let games = []
    for( let i = 0; i < 1000 ; i++){
        games.push({
             "ID":i,
            "Game_Name":'game'+i,
            "Player1":'player1',
            "Player2":'player2',
            "Who_Won_":'NO One' 
        })
    }
    response.json(games);
  });  

  router.get('/err', (request, response) => {
    var urlParts = url.parse(request.url, true);
    var parameters = urlParts.query;
    var myParam = parameters.myParam;
    // e.g. myVenues = 12;
    
    response.json(400 ,'my error')
   // response.json({});
    
  });  
  

// set the server to listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));