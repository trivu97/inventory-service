import jwt from "jsonwebtoken";
import mongoose, { Schema } from "mongoose";

import { compareSync, hashSync } from "bcrypt-nodejs";

const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    default: "Male",
  },
  birthday: {
    type: Date,
    default: new Date("01/01/2000"),
  },
  role: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
    require: true,
    default: true,
  },
});

UserSchema.pre("save", function(next) {
  if (this.isModified("password")) {
    this.password = this.hashPassword(this.password);
  }
  return next();
});

UserSchema.methods = {
  hashPassword(password) {
    return hashSync(password);
  },
  validatePassword(password) {
    return compareSync(password, this.password);
  },
  generateJWT() {
    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "5 days",
      }
    );
  },
  toJSON() {
    return {
      _id: this._id,
      username: this.username,
      fullname: this.fullname,
      gender: this.gender,
      birthday: this.birthday,
      role: this.role,
      isActive: this.isActive,
    };
  },
  toAuthJSON() {
    return {
      ...this.toJSON(),
      token: this.generateJWT(),
    };
  },
};

UserSchema.index({ username: "text" });

export default mongoose.model("User", UserSchema);
