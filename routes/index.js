var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Guest = mongoose.model('Guest');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.param('guest', function(req, res, next, id) {
  var query = Guest.findById(id);

  query.exec(function (err, guest){
    if (err) { return next(err); }
    if (!guest) {
      return res.status(404).json({message: 'Guest with id ' + id + ' can not be found.'});
    }

    req.guest = guest;
    return next();
  });
});

router.get('/guests', function(req, res, next) {
  Guest.find(function(err, guests){
    if(err){ return next(err); }

    res.json(guests);
  });
});

router.post('/guests', function(req, res, next) {
  var guest = new Guest(req.body);

  guest.save(function(err, guest){
    if(err){ return next(err); }

    res.json(guest);
  });
});

router.get('/guests/:guest', function(req, res) {
  res.json(req.guest);
});

router.put('/guests/:guest', function(req, res, next) {
  var body = req.body,
      responded = body.responded,
      allowed = req.guest.allowed,
      id = req.guest.id;

  if( responded > allowed ) {
    return res.status(400).json({message: 'Guest ' + id + ' was only allowed ' + allowed + ' total guests.'});
  }

  // Update the guest rsvp
  req.guest.update(body, function(error, guest) {
    if(error) return next(error);

    res.json(guest);
  });
});