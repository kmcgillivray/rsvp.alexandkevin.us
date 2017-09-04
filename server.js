const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const base = require('airtable').base('appC5XoakltUIWqUZ');

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.render('index');
});

// capture raw input and save it to the database as a single record
function createRsvp(req, res) {
  base('RSVPs').create({
    Name: req.body.name
  }, function(err, record) {
    if (err) { console.error(err); return; }
    res.redirect('/thank-you');
  });
}

// Try to update the existing guest record
function updateGuest(req, res) {

}

// Send an email notifying that there was an RSVP

// Redirect to thank you page

app.post('/rsvp', createRsvp);

app.get('/thank-you', function(req, res) {
  res.send('Thank you!')
});



app.listen(3000, function() {
  console.log('Listening at http://localhost:3000');
});
