//intializing express//
const express = require('express');
const app = express();

//to test whether express is running//
// app.get('/',(req,res) =>{
//     // res.send('Express be runnin!');
// });

//to access static content in public folder//
app.use(express.static('public'));

//start express on port 8080//
app.listen(8080, () =>{
    console.log('server started on http://localhost:8080');
    console.log('press CTRL + C to stop server');
});

//intializing https for API request//
const https = require('https');

//setting up EJS//
app.set('view engine','ejs');
//Declaring some global variables//
let kiteArray = [];
let imgRandom = function(array){
            return array[Math.floor(Math.random()*array.length)];
        }
let randoImg;


//rendering index page with API request inside//
app.get('/', (req, res) =>{ //
        https.get("https://api.darksky.net/forecast/bffefe9909f50602081ab5cf49078626/43.700,-79.5667?units=si",function(response){
        let str = '';
        response.on('data', function(chunk){
            str += chunk;
        })
        response.on('end', function(data){

            // console.log(JSON.parse(str)); //testing the initial get request//

            randoImg = imgRandom(kiteArray)
            const json_obj = JSON.parse(str);
            const windSp = json_obj.currently.windSpeed;
            const windNum = parseInt(windSp)
            if(windNum < 2){
                let messageBad = "Sorry there is not enough wind! It's only hitting " + windSp + " mph!";
                res.render('pages/index', {message: messageBad, randoImg: randoImg})            
            } else {
                let messageGood = "The wind is currently blowing at " + windSp + " mph!" + " Kite on man!"
                res.render('pages/index', {message: messageGood, randoImg: randoImg})
            }

        }); 
    });
});

//WebScrape//
//intializing request and cheerio//

let request = require("request"),
cheerio = require("cheerio")
url = "http://photographyblogger.net/23-beautiful-kite-pictures/";

request(url, function(error, response, body){
    if(!error){
        let $ = cheerio.load(body);
        
        $('div.wp-caption.alignnone > a > img').each(function(){
            let kitePics = $(this).attr('src');

            // console.log(kitePics)              
            kiteArray.push(kitePics);    
                       
        })        
    }
});
 









