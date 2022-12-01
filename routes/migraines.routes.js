const router = require("express").Router();
const isAuthenticated = require("../middlewares/jwt.middleware");
const protectRoute = require("../middlewares/protectRoute");
const Migraine = require("../models/Migraine.model");
const Tracker = require("../models/Tracker.model");

router.get("/", isAuthenticated, async (req, res, next) => {
  const userID = req.user.id;
  const allMigraines = await Migraine.find({ user: userID });
  res.send(200).json(allMigraines);
});

router.post("/", isAuthenticated, async (req, res, next) => {
  const data = req.body;
  data["user"] = req.user.id;
  const newMigraine = await Migraine.create(req.body);
  res.status(201).json(newMigraine);
});

module.exports = router;
