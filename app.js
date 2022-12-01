require("dotenv").config();
require("./config/dbConfig");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const { application } = require("express");

const app = express();

//? Services like render use something called a proxy and you need to add this to your server
app.set("trust proxy", 1);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.use("/api", require("./routes/index.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/migraines", require("./routes/migraines.routes"));
app.use("/api/trackers", require("./routes/trackers.routes"));

require("./error-handling/index")(app);

module.exports = app;
