const Workout = require("../models/workoutModel");

// get all workouts
exports.getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();

    res.status(200).json({
      status: "success",
      result: workouts.length,
      data: {
        workouts,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// get a single workout
exports.getWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        workout,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

// create new workout
exports.createWorkout = async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        newWorkout,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// delete a workout
exports.deleteWorkout = async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

// update a workout
exports.updateWorkout = async (req, res) => {
  try {
    const updateWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        updateWorkout,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
