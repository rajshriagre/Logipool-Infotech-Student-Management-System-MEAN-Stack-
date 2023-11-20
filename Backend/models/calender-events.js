const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogicpoolCalenderEventsScema = new Schema ({

  eventName: {
    type: String,
    required: true
  },

  eventDate: {
    type: String,
    required: true,
  },
  
  eventType: {
    type: String,
    required: true
  },

  batchName: {
    type: String ,
    required: true,
  },

  courseName: {
    type: String ,
    required: true
  },

  

  
},

{ timestamps: true }

);

const LogicpoolCalenderEvents = mongoose.model("LogicpoolCalenderEvents" , LogicpoolCalenderEventsScema)
module.exports = LogicpoolCalenderEvents;


