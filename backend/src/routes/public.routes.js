const express = require("express");
const controller = require("../controllers/public.controller");

const router = express.Router();

router.get("/trainings", controller.getTrainings);
router.get("/trainings/upcoming", controller.getUpcomingTrainings);
router.get("/trainings/:id", controller.getTraining);
router.post("/leads", controller.postLead);

module.exports = router;
