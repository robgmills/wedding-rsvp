var mongoose = require('mongoose');

var InviteSchema = new mongoose.Schema({
    guests: [
        {
            first: [String],
            last: String
        }
    ],
    responded: {type: Number, default: 0},
    respondedDate: Date
});

mongoose.model('Invite', InviteSchema);