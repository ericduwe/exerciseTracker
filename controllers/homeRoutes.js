const path = require("path");
const mongoose = require("mongoose");
const db = require("../models")
const API = require("../public/api.js");



//get most recent exercise and continue it?
module.exports = function(app) {
// app.get("/api/workouts", (req, res) => {
//     db.Workout.find({})
//       .then(dbWorkout => {
//         res.json(getLastWorkout(dbWorkout));
//       })
//       .catch(err => {
//         res.status(500).json(err);
//       });
//   });

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});


  //create new exercises and add to new workout plan
// app.post("/exercise", (req, res) => {
//     db.Workout.insert({ type: req.body.type }, { name: req.body.name }, { distance: req.body.distance }, { duration: req.body.duration })
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     });
// });


  // View the combined weight of multiple exercises from the past seven workouts on the `stats` page.


  //View the total duration of each workout from the past seven workouts on the `stats` page.
}
