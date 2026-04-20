const db = require("../data/mock-db");
const { createLead } = require("../services/data.service");

function ok(res, data, message) {
  return res.json({ success: true, message, data });
}

function getTrainings(req, res) {
  return ok(res, db.trainings);
}

function getUpcomingTrainings(req, res) {
  return ok(res, db.sessions);
}

function getTraining(req, res) {
  const training = db.trainings.find((item) => item.id === req.params.id || item.slug === req.params.id);

  if (!training) {
    return res.status(404).json({ success: false, message: "Formation introuvable." });
  }

  return ok(res, training);
}

function postLead(req, res) {
  const lead = createLead(req.body);
  return res.status(201).json({ success: true, message: "Lead créé.", data: lead });
}

module.exports = {
  getTrainings,
  getUpcomingTrainings,
  getTraining,
  postLead
};
