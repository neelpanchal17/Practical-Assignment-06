const mongooose = require('mongoose');
const leagueSchema = mongooose.Schema({
        "leagueid":String,
        "league_name":String,
        "origin_country":String,
        "totalclubs":Number
});
const leagueModel = mongooose.model("League-info",leagueSchema,"League-info");
module.exports = leagueModel;