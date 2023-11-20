const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogicpoolBatch_Module_Trainer_Schema = new Schema ({

  batchName: {
    type: String ,
    required: true,
    // unique: true //can't be unique otherwise other batches of same name for different courses can't be added.
  },

  courseName: {
    type: String ,
    required: true
  },

  moduleName: {
    type: String ,
    required: true
  },

  trainerFullName: {
    type: String ,
    required: true
  },

  startDate: {
    type: String,
    required: true,
  },

  endDate: {
    type: String,
    required: true
  }

  
},

{ timestamps: true }

);

const LogicpoolBatches_Module_Trainer = mongoose.model("LogicpoolBatches_Module_Trainer" , LogicpoolBatch_Module_Trainer_Schema)
module.exports = LogicpoolBatches_Module_Trainer;


