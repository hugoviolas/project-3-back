const router = require("express").Router();
const isAuthenticated = require("../middlewares/jwt.middleware");
const protectRoute = require("../middlewares/protectRoute");
const Migraine = require("../models/Migraine.model");
const Tracker = require("../models/Tracker.model");

router.get("/", (req, res, next) => {
  res.send("Migraines route");
});

router.post("/", isAuthenticated, async (req, res, next) => {
  const data = req.body;
  data["user"] = req.user.id;
  const newMigraine = await Migraine.create(req.body);
  res.status(201).json(newMigraine);
});

module.exports = router;
