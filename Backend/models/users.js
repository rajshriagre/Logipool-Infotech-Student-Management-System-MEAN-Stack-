const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogicpoolUsersSchema = new Schema ({

  emailId: {
    type: String ,
    required: true,
    unique: true
  },

  Role: {
    type: String ,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  status: {
    type: Boolean,
    required: true
  }

},

{ timestamps: true }

);

const LogicpoolUsers = mongoose.model("LogicpoolUsers" , LogicpoolUsersSchema)
module.exports = LogicpoolUsers;


