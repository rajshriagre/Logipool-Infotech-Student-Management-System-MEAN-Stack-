const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogicpoolRolesSchema = new Schema ({

  Role_Id: {
    type: String ,
    required: true,
  },

  Role_Name: {
    type: String ,
    required: true,
  },

} , 

{ timestamps: true }

);

const LogicpoolRoles = mongoose.model("LogicpoolRoles" , LogicpoolRolesSchema )
module.exports = LogicpoolRoles;


