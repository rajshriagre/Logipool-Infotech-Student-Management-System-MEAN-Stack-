const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogicpoolAdminsSchema = new Schema ({

  firstName: {
    type: String ,
    required: true,
  },

  lastName: {
    type: String ,
    required: true,
  },

  emailId: {
    type: String ,
    required: true,
    unique: true
  },

  contactNumber: {
    type: String ,
    required: true,
  },

  status: { // active or not
    type: Boolean,
    required: true,
  },

  userID: { //this will be the object id of this admin from users table
    type: String,
    required: true
  }
  
},

{ timestamps: true }

);

const LogicpoolAdmins = mongoose.model("LogicpoolAdmins" , LogicpoolAdminsSchema )
module.exports = LogicpoolAdmins;


