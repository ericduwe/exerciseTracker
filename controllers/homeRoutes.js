const router = require("express").Router();
const mongoose = require("mongoose");
const Workout = require("../models/workout.js");


router.get("/exercise", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  module.exports = router;