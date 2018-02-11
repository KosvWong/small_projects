var argv = process.argv.slice(2),
    request = require('request'),
    cheerio = require('cheerio'),
    url = "https://www.google.com/search?q=" +  argv[0] + "movie";

function displaySpoiler() { console.log("some dummy spoliers");};

setTimeout(function() {
   displaySpoiler() ;
}, parseInt(Number(argv[1])*1000));
console.log("***spoiler warning*** about the spoiler movie " + argv[0]);


function countDown() {
   setTimeout(function () {        
request (movieSpoiler, function (error, response, body) {
       var parseJson = JSON.parse(body);
       console.log ("SPOILER ALERT: " + " " + argv[0] + " " + parseJson.results[0].overview);
    })  
   }, (Number(argv[1])*1000));
};

countDown();

request(url, function(error, response, body) {
if(!error&&response.statusCode === 200) {
    var $ = cheerio.load(body);
    //console.log(body);
    $(".r a").each(function (index, title) {
        console.log($(title).text());
    });
}
});

var movieSpoiler = 'https://api.themoviedb.org/3/search/movie?api_key=0099f692785c6bf33c065c62ceb88a61&query=' + argv[0];
