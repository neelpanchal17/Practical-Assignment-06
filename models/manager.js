const mongooose = require('mongoose');
const managerSchema = mongooose.Schema({
    "managerid":String,
    "m_name":String,
    "nationality":String,
    "current_club":Number
});
const managerModel = mongooose.model("Manager-info",managerSchema,"Manager-info");
module.exports = managerModel;