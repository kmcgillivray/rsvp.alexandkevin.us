const router = require('express').Router();
const config = require('../config');
const base = require('airtable').base(config.airtable.baseId);

router.get('/', function(req, res) {
  res.render('index');
});

// capture raw input and save it to the database as a single record
function createRsvp(req, res, next) {
  var rsvp = {
    Name: req.body.name
  };

  base('RSVPs').create(rsvp, function(err, record) {
    if (err) { console.error(err); return; }
    next();
  });
}

// Try to update the existing guest record
function updateGuest(req, res) {

}

// Send an email notifying that there was an RSVP

// Redirect to thank you page

router.post('/rsvp', createRsvp, function(req, res) {
  res.redirect('/thank-you');
});

router.get('/thank-you', function(req, res) {
  res.send('Thank you!')
});

module.exports = router;
