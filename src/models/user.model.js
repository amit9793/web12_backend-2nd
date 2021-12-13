const bcrypt = require("bcryptjs");// hashing ke liya yani salt jke liye ke liye jwt install kara


const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name:{type:String,required:true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:{type:String,required:true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


//hashing the password
// create and update dono karega
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();// agar password modify nahi hai to gate out ho jawo
  bcrypt.hash(this.password, 10, (err, hash) => {
    this.password = hash;
    return next();
  });
});

//ab jake token crate karo

// hashing overrrrrrrrrrrrrrrrrr


// login ka part hai // yaha ham password chech kar rahe hai
userSchema.methods.checkPassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, function (err, same) {
      if (err) return reject(err);
      return resolve(same); // password same hai to send karega true yani same agar na ho to error
    });
  });
};

module.exports = model("user", userSchema); // users
