const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
// const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
//   author: ObjectId,
  username: { 
      type: String, 
      required: true, 
      max:[60, 'ユーザー名は最大文字数は60までです。']
    },
  email: { 
      type: String, 
      required: true, 
      lowercase: true,
      unique: true,
      max:[60, '最大文字数は60までです。']
    },
  password: { 
      type: String, 
      required: true, 
      min:[6, '最大文字数は6以上入力してください。'], 
      max:[30, '最大文字数は30までです。']
    },
});

UserSchema.methods.hashSamePass = function(inputPassword) {
  const user = this
  return bcrypt.compareSync(inputPassword, user.password)
}

// パスワードのハシュ化
UserSchema.pre('save', function(next){
  const user = this
  const saltRounds = 10

  bcrypt.genSalt(saltRounds, function(err, salt){
    bcrypt.hash(user.password, salt, function(err, hash){
      user.password = hash
      next()
    });
  });
});

module.exports = mongoose.model('User', UserSchema);