const mongooose = require('mongoose');
const clubSchema = mongooose.Schema({
    "clubid":String,
    "club_name":String,
    "stadium_name":String,
    "club_manager":String,
    "leagueid":String,
    "number_of_title":Number
});
const clubModel = mongooose.model("Club-info",clubSchema,"Club-info");
module.exports = clubModel;