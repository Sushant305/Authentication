const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");
const { createWorkout, getAllWorkout, getworkoutById, deleteWorkoutById, updateWorkoutById } = require("../controllers/workoutController");

/*
 * Routes: /api/workouts
 * method: GET
 * description: get all the workouts
 * parameters: none
 * Access : Public
 */

router.get("/",getAllWorkout);

/*
 * Routes: /api/workouts/:id
 * method: GET
 * description: get a single workout by its id
 * parameters: id
 * Access : Public
 */
router.get("/:id",getworkoutById);

/*
 * Routes: /api/workouts/
 * method: POST
 * description: Create / add a new workout
 * parameters: none
 * Access : Public
 */
router.post("/", createWorkout);

/*
 * Routes: /api/workouts/:id
 * method: DELETE
 * description: Delete a workout by using its id
 * parameters: id
 * Access : Public
 */
router.delete("/:id",deleteWorkoutById);

/*
 * Routes: /api/workouts/:id
 * method: PATCH
 * description: Update a workout by its id
 * parameters: id
 * Access : Public
 */
router.patch("/:id",updateWorkoutById);

module.exports = router;
