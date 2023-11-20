const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogicpoolAssignmentsSchema = new Schema ({

  courseName: {
    type: String,
    required: true
  },

  moduleName: {
    type: String ,
    required: true
  },

  assignmentName: {
    type: String,
    required: true,
  },
    
  assignmentURL: {
    type: String,
    required: true,
  },

  
  

},

{ timestamps: true }

);

const LogicpoolAssignments = mongoose.model("LogicpoolAssignments" , LogicpoolAssignmentsSchema)
module.exports = LogicpoolAssignments;


