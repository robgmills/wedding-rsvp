var mongoose = require('mongoose');

var GuestSchema = new mongoose.Schema({
    first: String,
    last: String,
    allowed: {type: Number, default: 1},
    responded: {type: Number, default: 0}
});

mongoose.model('Guest', GuestSchema);