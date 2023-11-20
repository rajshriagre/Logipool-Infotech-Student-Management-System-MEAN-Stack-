const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogicpoolModulesSchema = new Schema ({

  moduleName: {
    type: String ,
    required: true,
    // unique: true
  } ,

  courseName: {
    type: String ,
    required: true
  }

},

{ timestamps: true }
);

const LogicpoolModules = mongoose.model("LogicpoolModules" , LogicpoolModulesSchema)
module.exports = LogicpoolModules;


