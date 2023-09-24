const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    username: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
    roles: { type: Array, default: ["USER"] },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    skills: { type: Array, default: [] },
    teams: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
