import User from "../models/users.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { createError } from "../utils/error.js";
import { generateToken } from "../utils/token.js";

export const register = async (req, res, next) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return next(createError("User with that email exists", 400));
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = await User.create({
      firstname: req.body.firstname,
      surname: req.body.surname,
      email: req.body.email,
      countrycode: req.body.countrycode,
      telnum: req.body.telnum,
      password: hash,
    });

    res.status(201).send({
      firstname: newUser.firstname,
      email: newUser.email,
      telnum: newUser.telnum,
      token: generateToken(newUser),
    });
  } catch (err) {
    next(err);
  }
};
//login

export const login = async (req, res, next) => {
  try {
    console.log(req.body);

    const user = await User.findOne({ email: req.body.email });
    console.log(await bcrypt.compare(req.body.password, user.password));
    console.log(user);
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      res.status(200);
      console.log('exec')
      return res.send({
        firstname: user.firstname,
        email: user.email,
        telnum: user.telnum,
        token: generateToken(user),
      });
    }

    return next(createError("wrong email or password", 400));

    // if (!user) return next(createError(404, "user not found"));

    // const isPasswordCorrect = bcrypt.compare("req.body.pasword", user.password);

    // if (!isPasswordCorrect)
    //   return next(createError(400, "wrong password or username"));

    // const token = jwt.sign(
    //   { id: user.id, isAdmin: user.isAdmin },
    //   "RANDOM-TOKEN",
    //   { expires: "24h" }
    // );

    // const { password, isAdmin, ...otherDetails } = user._doc;

    // res.status(200).json({ ...otherDetails }, token);
  } catch (err) {
    next(err);
  }
};
