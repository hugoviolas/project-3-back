const router = require("express").Router();
const Phase = require("./../models/Phase.model");

router.get("/", async (req, res, next) => {
  try {
    const phases = await Phase.find();
    res.status(200).json(phases);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
