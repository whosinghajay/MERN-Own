import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      minLength: 6,
      required: true,
    },
    followers: {
      type: [String],
      default: [],
    },
    following: {
      type: [String],
      default: [],
    },
    bio: {
      type: String,
      default: "",
    },
    profilePic: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
