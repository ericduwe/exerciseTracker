const path = require("path");
const mongoose = require("mongoose");
const db = require("../models")





module.exports = function(app) {
//create new exercises and add to new workout plan
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({})
        .then((dbWorkout => {
            res.json(dbWorkout);
        }))
        .catch(err => {
            res.json(err);
        })
    })

    //update workout plan
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
            req.params.id, 
            {$push: { exercises: req.body }},
            {new: true}
        ).then(dbWorkout => {res.json(dbWorkout)})
        .catch(err => {
            res.json(err)
        });
    });

    //read recent workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.aggregate([
            {$addFields: {totalDuration: {$sum: '$exercises.duration'}}}
        ])
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })

    //read recent stats
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.aggregate([
            {$addFields: {totalDuration: {$sum: '$exercises.duration'}, totalWeight: {$sum: '$exercises.weight'}}}
        ]).limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
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

}
