var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Invite = mongoose.model('Invite');

module.exports = router;

router.param('invite', function(req, res, next, id) {
  var query = Invite.findById(id);

  query.exec(function (err, invite){
    if (err) { return next(err); }
    if (!invite) {
      return res.status(404).json({message: 'Invite with id ' + id + ' can not be found.'});
    }

    req.invite = invite;
    return next();
  });
});

router.get('/api/invites', function(req, res, next) {
  Invite.find(function(err, invites){
    if (err) { return next(err); }

    res.json(invites);
  });
});

router.get('/api/invites/search', function(req, res, next) {
  const last = req.query.last,
      first = req.query.first,
      lastRegex = new RegExp(req.query.last, 'i'),
      firstRegex = new RegExp(req.query.first, 'i');

  Invite.findOne({'guests.last': lastRegex, 'guests.first': firstRegex}, function(err,found){
    if (err) { return next(err); }
    if (!found) {
      return res.status(404).json({message: 'No invite found for ' + first + ' ' + last});
    }

    res.json(found);
  });
});

router.post('/api/invites', function(req, res, next) {
  var invite = new Invite(req.body);

  invite.save(function(err, invite){
    if(err){ return next(err); }

    res.json(invite);
  });
});

router.get('/api/invites/:invite', function(req, res) {
  res.json(req.invite);
});

router.put('/api/invites/:invite', function(req, res, next) {
  var body = req.body,
      responded = body.responded,
      allowed = req.invite.guests.length,
      id = req.invite.id;

  if( responded > allowed ) {
    return res.status(400).json({message: 'Invite ' + id + ' was only allowed ' + allowed + ' total guests.'});
  }

  // Update the guest rsvp
  req.invite.update(body, function(error, invite) {
    if(error) return next(error);

    res.json(invite);
  });
});