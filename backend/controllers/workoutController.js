const mongoose = require("mongoose");
const Workout = require("../models/workoutModel");

// get all workout
exports.getAllWorkout = async (req, res) => {
  try {
    
    const user_id = req.user._id;
    console.log("Authenticated user ID:", req.user._id);
    console.log("Workout query user_id:", user_id);
    const workout = await Workout.find({
      user_id,
    }).sort({
      createdAt: -1,
    });

    if (!workout || workout.length === 0) {
      return res.status(404).json({
        error: "No Workouts are present",
      });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get a workout by a single id
exports.getworkoutById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        error: "This is invalid Id",
      });
    }
    const workout = await Workout.findOne({
      _id: id,
      user_id: req.user._id,
    });
    if (!workout) {
      return res.status(404).json({
        error: "No Workouts are present",
      });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// create a new workout
exports.createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
   console.log("CREATE WORKOUT CONTROLLER HIT");

  let emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (!reps) {
    emptyFields.push("reps");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "please fill out all the fields", emptyFields });
  }

  try {
    const user_id = req.user._id;
    console.log("User ID being saved:", user_id);
    // const workout = await Workout.insertMany(req.body)
    const workout = await Workout.create({
      title,
      reps,
      load,
      user_id,
    });
    console.log("Created workout:", workout);
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete a workout by its id
exports.deleteWorkoutById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        error: "This is invalid Id",
      });
    }
    const workout = await Workout.findOneAndDelete({
      _id: id,
      user_id: req.user._id,
    });
    if (!workout) {
      return res.status(404).json({
        error: "No Workouts are present",
      });
    }
    res.status(200).json({ message: "workout deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update a workout by its id
exports.updateWorkoutById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        error: "This is invalid Id",
      });
    }
    const workout = await Workout.findOneAndUpdate(
      {
        _id: id,
        user_id: req.user._id,
      },
      { ...req.body },
      { new: true, runValidators: true },
    );
    if (!workout) {
      return res.status(404).json({
        error: "No Workouts found with this id",
      });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
