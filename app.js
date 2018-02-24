var PORT = 3000;
var MONGODBURL = 'mongodb://127.0.0.1:27017';
var DATABASENAME = "admin";

var express = require('express');
var bodyParser = require('body-parser');

// DB connexion
var db;
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
MongoClient.connect(MONGODBURL, (err, client) => {
  if (err) return console.log(err);
  db = client.db(DATABASENAME);
  app.listen(PORT, () => {
    console.log('listening on ' + PORT);
  }).on('error', function(err){
    console.log('on error handler');
    console.log(err);
  })
});

var app = express();
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// path where files are not processed
app.use(express.static('client'));

// default root
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/gramma', function (req,res){
	let resObj = {mots:[]}; 
	let motsTab = req.body.phrase.split(" ");
	let i = 0;
	let search = function(){
		db.collection('mots').find({orthographe: motsTab[i]}).toArray((err, result) => {
	        if (err) return console.log(err)
	        resObj.mots.push(result);
	    	if (i === motsTab.length-1 ){
	    		res.send(resObj);
	    	} else {
	    		i++;
	    		search();
	    	}
	    })
	};
	search();

})


// GET : read all
app.get('/mots/', function (req,res){
    console.log("liste des mots");
    db.collection('mots').find().toArray((err, result) => {
        if (err) return console.log(err)

        console.log(result);
        res.send(result);
    })
})




var http      = require('http');
var fs = require('fs');

var dataAll;




var getUrlsMots = function(){
    http.get('http://www.larousse.fr/index/dictionnaires/francais/' + alphabet[letter] + '/' + index, function(res){
        res.on('data', function(data){
            dataAll += data;

            if (res.statusCode === 200) {
                dataAll += data;
                
            }

        });

        res.on('end', function () {
            

            index++;

            if(index <= 70){
                getUrlsMots();
            } else {
                console.log(alphabet[letter]);
                letter++;
                if(letter < 26) {
                    index = 1;
                    getUrlsMots();
                } else {
                    fs.writeFile('All.txt', dataAll , function (err) {
                        if (err) throw err;
                        console.log('It\'s saved!');
                    });
                }


                
            }
            
        });
 
        res.on('error', function(e){
            //console.log(e);
        });
 
    });

}
 
var index = 1;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var letter = 0;

setTimeout(()=>{
    //getUrlsMots();
},5000);



var listeUrlMots = require('./listeUrlMots');
var indexDef = 0;
var dataAllDef = "";
var dataPart = "";

var getDefs = function(){
    http.get(listeUrlMots.urls[indexDef], function(res){
        res.on('data', function(data){
            //dataAll += data;

            if (res.statusCode === 200) {
                dataPart += data;
                
            }

        });

        res.on('end', function () {
            
            dataAllDef += dataPart.substring(
                dataPart.lastIndexOf('<article class="BlocDefinition content" role="article">'),
                dataPart.indexOf("</article>", 
                    dataPart.lastIndexOf('<article class="BlocDefinition content" role="article">')
                )
            ) + "</article>";

            dataPart = "";

            console.log(listeUrlMots.urls[indexDef]);
            indexDef++;

            if(indexDef < listeUrlMots.urls.length){
                fs.writeFile('AllDefs.txt', dataAllDef , function (err) {
                    if (err) {
                        console.log(err);
                        indexDef--;
                        getDefs();
                    }
                    console.log('It\'s saved!');
                    //setTimeout(()=>{
                        getDefs();
                    //},4000);
                });
            } else {
                fs.writeFile('AllDefs.txt', dataAllDef , function (err) {
                    if (err) throw err;
                    console.log('It\'s saved!');
                });
            }
            
        });
 
        res.on('error', function(e){
            console.log(e);
            getDefs();
        });
 
    });

}

setTimeout(()=>{
    //getDefs();
},5000);


/*var urlMotTemp = [];

listeUrlMots.urls.forEach((element)=>{
    if(urlMotTemp.indexOf(element) == -1 && element.substring(0,46) === "http://www.larousse.fr/dictionnaires/francais/" ){
        urlMotTemp.push(element);
    }
});

fs.writeFile('urlAgain.txt', urlMotTemp.join('","') , function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
});*/




/*// GET : read one
app.get('/users/:userId', function (req,res){
    console.log("user details : " + req.params.userId);
    db.collection('users').findOne({_id : new ObjectID(req.params.userId)},(err, result) => {
        if (err == null)
        {
            console.log(result);
            res.send(result);
        } 

        return console.log(err);
    }) 
})

// GET : many params example
app.get('/users2/:flag1.:flag2', function (req,res){
    res.send('users <br/>- flag1 : ' + req.params.flag1 + '<br/>- flag2 : ' + req.params.flag2);
})

// GET : many params alternative example
app.get('/users3/:flag1-:flag2', function (req,res){
    res.send('users <br/>- flag1 : ' + req.params.flag1 + '<br/>- flag2 : ' + req.params.flag2);
})

// POST : create
app.post('/users/', function(req, res){
    console.log('user created');
    console.log(req.body);
    
    db.collection('users').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/')
    })
})

// PUT : update one
app.put('/users/:userId', function(req, res){
    console.log('user updated : ' + req.params.userId);
    console.log(req.body);

    db.collection('users').findOneAndUpdate({_id : new ObjectID(req.params.userId)}, {
        $set: {
            lastname: req.body.lastname,
            firstname: req.body.firstname
        }
    }, {
        sort: {_id: -1},
        upsert: true
    }, (err, result) => {
        if (err) return res.send(err)
        res.send(result)
    })
})

// DELETE : delete
app.delete('/users/:userId', function(req, res){
    console.log('user deleted : ' + req.params.userId)
    db.collection('users').findOneAndDelete({_id : new ObjectID(req.params.userId)},
    (err, result) => {
        if (err) return res.send(500, err)
        
        res.send('user deleted')    
    })
})*/