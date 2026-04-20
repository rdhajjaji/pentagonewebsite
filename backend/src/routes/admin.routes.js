const express = require("express");
const controller = require("../controllers/admin.controller");

const router = express.Router();

router.post("/login", controller.login);
router.get("/dashboard", controller.dashboard);
router.get("/leads", controller.getLeads);
router.get("/leads/:id", controller.getLead);
router.patch("/leads/:id", controller.patchLead);
router.get("/quotes", controller.getQuotes);
router.get("/trainings", controller.getTrainings);
router.post("/trainings", controller.postTraining);
router.put("/trainings/:id", controller.putTraining);
router.delete("/trainings/:id", controller.removeTraining);
router.get("/sessions", controller.getSessions);
router.post("/sessions", controller.postSession);
router.put("/sessions/:id", controller.putSession);
router.delete("/sessions/:id", controller.removeSession);

module.exports = router;
