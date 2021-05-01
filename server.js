/*
const nouns = ["appearance", "appointment", "argument", "arrival", "awareness", "cabinet", "candidate", "charity", "cigarette", "committee", "conclusion", "confusion", "customer", "direction", "director", "discussion", "editor", "emotion", "employee", "employment", "energy", "family", "government", "importance", "industry", "inflation", "management", "manager", "measurement", "media", "medicine", "membership", "memory", "passenger", "percentage", "perception", "poetry", "possession", "preference", "president", "procedure", "professor", "quality", "quantity", "ratio", "relation", "requirement", "revenue", "solution", "sympathy", "actor", "area", "aspect", "audience", "birthday", "category", "chemistry", "city", "climate", "complaint", "context", "contribution", "courage", "currency", "dealer", "departure", "depression", "description", "device", "enthusiasm", "equipment", "establishment", "family", "feedback", "fishing", "history", "improvement", "inflation", "injury", "maintenance", "marriage", "office", "penalty", "percentage", "permission", "possession", "reading", "reality", "recommendation", "relation", "republic", "salad", "secretary", "selection", "software", "system", "television", "theory", "transportation", "writing"];
const adj = ["abrupt", "accidental", "agreeable", "animated", "bashful", "calm", "careless", "chunky", "coordinated", "difficult", "disturbed", "drab", "drunk", "efficient", "equable", "far", "first", "grouchy", "incandescent", "joyous", "kindly", "lethal", "long", "loud", "loving", "married", "materialistic", "obeisant", "optimal", "perpetual", "premium", "public", "regular", "righteous", "sexy", "shy", "skillful", "slippery", "spiky", "subdued", "successfully", "tender", "unable", "unsightly", "various", "victorious", "wide-eyed", "witty", "wooden", "yielding", "yummy", "abandoned", "abject", "absent", "attractive", "auspicious", "bewildered", "blushing", "boorish", "bored", "boundless", "caring", "chief", "cooing", "dull", "earsplitting", "efficacious", "eight", "embarrassed", "entertaining", "faded", "few", "filthy", "five", "giant", "graceful", "guttural", "highfalutin", "knowledgeable", "light", "limping", "loutish", "magnificent", "next", "obvious", "ordinary", "overt", "parallel", "pastoral", "scrawny", "screeching", "silky", "slippery", "slow", "smoggy", "strict", "swift", "unaccountable", "vague", "wet", "wooden"];
const express = require('express');

const ejs = require('ejs');

var rug = require('random-username-generator');

rug.setSeperator('.');

rug.setNames([...nouns]);
rug.setAdjectives([...adj]);

// const cors = require('cors');

const app = express();

var messages_array = [];

const server = app.listen(8080, () => { // the http server
    console.log('Server listening at port 8080');
});

const io = require("socket.io")(server);

function dateTime() { // date-time timestamp function. returns final date-time object

    const timestampNow = Date.now() // get current timestamp in milliseconds
    const date = new Date(timestampNow); // convert timestamp to date object

    const humanDateFormat = date.toLocaleString(); // then convert fate object to human readable format

    const splitDateTime = humanDateFormat.split(', '); // split date and time. date at idx 0 and time at idx 1

    const finalDateTime = {
        date: splitDateTime[0],
        time: splitDateTime[1] + ' UTC'
    };
    // console.log('finalDateTime:',finalDateTime);
    return finalDateTime; // obj => { date: '', time: '' }
}

// set the view engine to ejs
app.set('view engine', 'ejs');

// allow the public folder to be accessible to the ejs files as well as the public via their uris with the '/' being the '/public' folder directory
app.use(express.static(__dirname + '/public'));

// index page
app.get('/', function(req, res) {
    res.render('index');
});

// about page
app.get('/about', function(req, res) {
    res.render('about');
});

// example_api page
app.get('/example_api', function(req, res) {
    res.render('example_api');
});

// socket_demo page
app.get('/socket_demo', function(req, res) {
    res.render('socket_demo');
});

app.use(function(req, res) {
    res.status(404).render('404');
});

io.on('connection', (socket) => {
    let userDATA = {
        username: rug.generate(),
        userID: socket.id,
    };

    function returnUserData() {
        let userDATA = {
            username: rug.generate(),
            userID: socket.id,
        };

        console.log("Run the test!");
        return { test: "userDATA" };
    }
    console.log('socket.id: ', socket.id);

    socket.on('requesting_all_messages', (cb) => {
        console.log('A user requests all messages!');
        cb(messages_array);
    });

    socket.on('message', (data, cb) => {
        messages_array.push({
            sender: userDATA.username,
            msg: data.msg,
            log: {
                date: dateTime().date,
                time: dateTime().time
            }
        });
        socket.on('get_all_messages', (cb) => {
            cb(messages_array)
        });
        socket.broadcast.emit('get_all_messages', messages_array);
        console.log('User sent:', data);
        socket.emit('get_user_data', userDATA);
        socket.emit('user_msg', {
            sender: userDATA.username,
            msg: data.msg,
            log: {
                date: dateTime().date,
                time: dateTime().time
            }
        });
        cb(messages_array);
    });

});
*/


var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

// set the about page route
app.get('/about', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('about');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});