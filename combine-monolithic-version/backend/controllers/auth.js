import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


import User from "../models/user.js";

//@desc Post login
//@route POST /login
//access Public
export const postLogin = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;


    const user = await User.findOne({ email: email });

    if (!user) {
      const error = new Error("Kullanıcı bulunamadı!");
      error.statusCode = 401;
      throw error;
    }

    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      const error = new Error("Yanlış şifre!");
      error.statusCode = 401;
      throw error;
    }

    const accessToken = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString(),
      },
      "somesupersecretsecret",
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "success", accessToken, user });
  } catch (err) {
    console.error(err);
    res.status(err.statusCode || 500).json({ error: err.message || "Internal Server Error" });
  }
};

//@desc Post signup
//@route POST /signup
//access Public
export const postSignup = async (req, res, next) => {
  try {
    const { email, password, name, surname, level,title,leadership,projectDedicate } = req.body;
    const hashedPw = await bcrypt.hash(password, 12);
    const newUser = new User({
      email,
      password: hashedPw,
      name,
      surname,
      level,
      title,
      leadership,
      projectDedicate
    });
    await newUser.save();
    const accessToken = jwt.sign(
      {
        email: newUser.email,
        userId: newUser._id.toString(),
      },
      "somesupersecretsecret",
      { expiresIn: "1h" }
    );
    res.status(201).json({ message: "User saved succesfully!", accessToken, newUser });
  } catch (err) {
    res.status(500).json({ message: "Error at saving user" });
    next(err);
  }
};

//@desc Get current user check
//@route GET /current-token
//access Public
export const currentUserCheck = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: "Authorization token missing" });
    }

    jwt.verify(token, "somesupersecretsecret", async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      }



  
      res.json({ message: true });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}; 

//@desc Get current user 
//@route GET /current-token
//access Public
export const currentUserInfo = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: "Authorization token missing" });
    }

    jwt.verify(token, "somesupersecretsecret", async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      }


      const email = decoded.email;

      const user = await User.findOne({ email: email });
      res.json({  user });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}; 
