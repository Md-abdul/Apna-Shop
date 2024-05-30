const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;




// const mongoose = require('mongoose');

// const UserSchema = mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//     cart: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'cart'
//     }]
// });

// const UserModel = mongoose.model('user', UserSchema);
// module.exports = UserModel;
