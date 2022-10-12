import { createError } from "../error.js";
import User from "../models/User.js";

// For Update a User
export const update = async (req, res, next) => {
  if (req.params.id == req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};

// For Delete a User
export const deleteUser = async (req, res, next) => {
  if (req.params.id == req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("user has been deleted");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can Delete only your account!"));
  }
};

// For Get info of a Single User
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// For subscribtion and Incress Subscribers
export const subscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    });

    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json("Subscription successfull");
  } catch (error) {
    next(error);
  }
};

// For Unsubscribtion and Decress Subscribers
export const unsubscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedUsers: req.params.id },
    });

    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });
    res.status(200).json("Unsubscribe successfull");
  } catch (error) {
    next(error);
  }
};

// For Like and Incress Likes
export const like = async (req, res, next) => {};

// For Dislike and Decress Like
export const dislike = async (req, res, next) => {};
