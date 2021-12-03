const express = require('express');
const app = express();
app.use(express.json());
//const port = 5000;

const leagueRoutes = require("./routes/league");
const clubRoutes = require("./routes/club");
const managerRoutes = require("./routes/manager");
const playerRoutes = require("./routes/players");

app.get('/',(req,res)=>res.send("Hello Football Fans!!"));
app.use("/league",leagueRoutes);
app.use("/club",clubRoutes);
app.use("/manager",managerRoutes);
app.use("/players",playerRoutes);
app.listen(process.env.PORT || 5000);