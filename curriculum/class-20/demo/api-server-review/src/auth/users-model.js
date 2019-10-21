const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const users = new mongoose.Schema({
  username: {type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
  role: {
    type: String,
    required: true,
    default: 'user',
    enum: ['admin','editor','user'],
  },
});

users.pre('save', async function() {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

users.statics.authentiateBasic = async function ({ username, password }) {
  let query = { username };
  let user = this.findOne(query);
  return user && user.comparePassword(password);
}

users.statics.authenticateToken = async function(token) {
  // Decode *but can't verify yet*
  let tokenData = jwt.decode(token);
  let query = { _id: tokenData.id };
  let user = await this.findOne(query);

  if (user && jwt.verify(token, user.generateSecret())) {
    return user;
  }
  else {
    return null;
  }
}

users.methods.comparePassword = async function(password) {
  let valid = await bcrypt.compare(password, this.password);
  return valid ? this : null; // Return user only if password matched
}

users.methods.generateToken = function () {
  let tokenData = {
    id: this._id,
    role: this.role,
  };
  return jwt.sign(tokenData, this.generateSecret());
}

users.methods.generateSecret = function() {
  // TODO: maybe include this.password in secret?
  return process.env.SECRET || 'DeltaV';
}

module.exports = mongoose.model('users', users);
