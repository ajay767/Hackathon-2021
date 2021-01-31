const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please specify your name!']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please specify your email']
  },
  password: {
    type: String,
    required: [true, 'password is required!']
  },
  coin: {
    type: Number,
    default: 100
  },
  confirmPassword: {
    type: String,
    required: [true, 'password confirm is required!'],
    validate: {
      validator: function(el) {
        return this.password === el;
      },
      message: 'Passwords are not same!'
    }
  }
});

userSchema.pre('save', async function(next) {
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
