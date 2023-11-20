const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogicpoolCoursesSchema = new Schema ({

  courseName: {
    type: String ,
    required: true,
    unique: true
  },

  courseDuration: {
    type: String ,
    required: true,
  },

  
},

{ timestamps: true }

);

const LogicpoolCourses = mongoose.model("LogicpoolCourses" , LogicpoolCoursesSchema)
module.exports = LogicpoolCourses;


