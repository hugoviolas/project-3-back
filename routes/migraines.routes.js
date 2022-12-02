const router = require("express").Router();
const isAuthenticated = require("../middlewares/jwt.middleware");
const protectRoute = require("../middlewares/protectRoute");
const Migraine = require("../models/Migraine.model");
const Tracker = require("../models/Tracker.model");

// Get all migraines for a user
router.get("/", isAuthenticated, async (req, res, next) => {
  const userID = req.user.id;
  const allMigraines = await Migraine.find({ user: userID });
  res.status(200).json(allMigraines);
});

// Create a new migraine
router.post("/", isAuthenticated, async (req, res, next) => {
  const data = req.body;
  data["user"] = req.user.id;
  const newMigraine = await Migraine.create(req.body);
  res.status(201).json(newMigraine);
});

// See the details of one migraine
router.get("/:id", isAuthenticated, async (req, res, next) => {
  try {
    const oneMigraine = await Migraine.findById(req.params.id)

    res.status(200).json(oneMigraine)
  } catch (error) {
    next(error)
  }
})

// Edit a migraine

// Delete a migraine
router.delete("/:id", async (req, res, next) => {
  try {
    await Migraine.findByIdAndRemove(req.params.id);
    res.status(200)
  } catch (error) {
    next(err);
  }
});

module.exports = router;
