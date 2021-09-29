const path = require("path");
const mongoose = require("mongoose");
const db = require("../models")
const API = require("../public/api.js");




module.exports = function(app) {
//create new exercises and add to new workout plan
app.post("/api/workouts", ({body}, res) => {
    db.Workout.create(body)
    .then((dbWorkout => {
        res.json(dbWorkout);
    }))
    .catch(err => {
        res.json(err);
    })
})

//get most recent exercises and add to them
app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        {id: req.params.id}, 
        {$push: { exercises: req.body }}
    ).then(dbWorkout => {res.json(dbWorkout)})
    .catch(err => {
        res.json(err)
    });
});

//HTML Routes
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});



// app.post("/exercise", (req, res) => {
//     db.Workout.insert({ type: req.body.type }, { name: req.body.name }, { distance: req.body.distance }, { duration: req.body.duration })
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     });
// });


  // View the combined weight of multiple exercises from the past seven workouts on the `stats` page.


  //View the total duration of each workout from the past seven workouts on the `stats` page.
}
