import User from "../models/userModels.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { email, name, username, phoneNumber, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const user = new User({
    email,
    name,
    username,
    phoneNumber,
    password: hashedPassword,
  });
  try {
    await user.save();
    res.status(201).json("User Created Successfully!!");
  } catch (error) {
    // res.status(500).json(error.message);
    next(error);
  }
};

export const login = async (req, res) => {
  const {username, password} = req.body;

};
