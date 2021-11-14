const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        //code here
    },
    exercises: [
        {
            //code here
        },
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;