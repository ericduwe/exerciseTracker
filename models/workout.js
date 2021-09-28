const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  distance: {
    type: Number,
     
  },
  weight: {
    type: Number,
     
  },
  sets: {
    type: Number,
     
  },
  reps: {
    type: Number,
     
  },
  duration: {
    type: Number,
    required: true, 
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;