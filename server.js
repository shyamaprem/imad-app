var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article-One',
    heading:'Article-One',
    date:'Sep 6 2017',
    content:`   <p>
                    This is my first time working with Node.js and I ran into this problem:
                </p>
                <p>
                    I have started a Node server through the plugin of an IDE. Unfortunately, I cannot use the IDE's terminal. So I tried to run the script from the command line.
                    
                </p>
                <p>
                    This is the problem - I am using the Express module and my app is listening some port (8080). When I start the app from the command line, it throws this error:
                    
                </p>`
};
function createTemplate(data){
    
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `<html>
        <head>
            <title> 
              ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet">
        </head>
        
        <body>
            <div class="container">
                <div>
                    <a href = "/"> Home </a>
                </div>
                <div>
                    <h3> ${heading}</h3>
                </div>
                <div>
                    ${date}
                </div>
                <div>
                   ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
