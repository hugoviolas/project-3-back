const router = require("express").Router();
const protectRoute = require("../middlewares/protectRoute");
const Migraine = require("../models/Migraine.model");
const Tracker = require("../models/Tracker.model");

router.get("/", (req, res, next) => {
  res.send("Migraines route");
});

router.post("/", async (req, res, next) => {
  console.log("body: ", req.body);
  const newMigraine = await Migraine.create(req.body);
  res.status(201).json(newMigraine);
});

module.exports = router;
