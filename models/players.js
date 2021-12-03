const mongooose = require('mongoose');
const playerSchema = mongooose.Schema({
    "playerid":String,
    "p_name":String,
    "nationality":String,
    "current_club":Number
});
const playerModel = mongooose.model("Player-info",playerSchema,"Player-info");
module.exports = playerModel;