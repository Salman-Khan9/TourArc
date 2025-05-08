const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./Routes/Users");
const routes = require("./Routes/Hotel");
const specialroute = require("./Routes/Specialoffers");
const TDroutes = require("./Routes/Trendingdestinations");
const Poffersroute = require("./Routes/Pastoffers");
require("dotenv").config();
const app = express();

app.use(
  cors({
    origin: "https://tour-arc-d51d.vercel.app",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(route);
app.use(routes);
app.use(specialroute);
app.use(TDroutes);
app.use(Poffersroute);

const Port = process.env.Port || 5000;
mongoose.connect(process.env.MONGO_URI).then((mongooseInstance) => {
  app.listen(Port, () => {
    console.log("📂 Connected to DB:", mongooseInstance.connection.name);
    console.log(`Web is running on server port ${Port}`);
  });
});
