const db = require("../data/mock-db");
const env = require("../config/env");
const {
  getDashboard,
  updateLead,
  createTraining,
  updateTraining,
  deleteTraining,
  createSession,
  updateSession,
  deleteSession
} = require("../services/data.service");

function ok(res, data, message) {
  return res.json({ success: true, message, data });
}

function login(req, res) {
  const { email, password } = req.body;

  if (email !== env.adminEmail || password !== env.adminPassword) {
    return res.status(401).json({ success: false, message: "Identifiants invalides." });
  }

  return ok(res, {
    token: "demo-token",
    user: {
      id: "admin-1",
      email: env.adminEmail,
      fullName: "Admin Pentagone",
      role: "Administrateur"
    }
  });
}

function dashboard(req, res) {
  return ok(res, getDashboard());
}

function getLeads(req, res) {
  return ok(res, db.leads);
}

function getLead(req, res) {
  const lead = db.leads.find((item) => item.id === req.params.id);
  if (!lead) {
    return res.status(404).json({ success: false, message: "Lead introuvable." });
  }
  return ok(res, lead);
}

function patchLead(req, res) {
  const lead = updateLead(req.params.id, req.body);
  if (!lead) {
    return res.status(404).json({ success: false, message: "Lead introuvable." });
  }
  return ok(res, lead, "Lead mis à jour.");
}

function getQuotes(req, res) {
  return ok(res, db.leads.filter((item) => item.type === "quote"));
}

function getTrainings(req, res) {
  return ok(res, db.trainings);
}

function postTraining(req, res) {
  return res.status(201).json({ success: true, data: createTraining(req.body) });
}

function putTraining(req, res) {
  const training = updateTraining(req.params.id, req.body);
  if (!training) {
    return res.status(404).json({ success: false, message: "Formation introuvable." });
  }
  return ok(res, training, "Formation mise à jour.");
}

function removeTraining(req, res) {
  const success = deleteTraining(req.params.id);
  if (!success) {
    return res.status(404).json({ success: false, message: "Formation introuvable." });
  }
  return ok(res, true, "Formation supprimée.");
}

function getSessions(req, res) {
  return ok(res, db.sessions);
}

function postSession(req, res) {
  return res.status(201).json({ success: true, data: createSession(req.body) });
}

function putSession(req, res) {
  const session = updateSession(req.params.id, req.body);
  if (!session) {
    return res.status(404).json({ success: false, message: "Session introuvable." });
  }
  return ok(res, session, "Session mise à jour.");
}

function removeSession(req, res) {
  const success = deleteSession(req.params.id);
  if (!success) {
    return res.status(404).json({ success: false, message: "Session introuvable." });
  }
  return ok(res, true, "Session supprimée.");
}

module.exports = {
  login,
  dashboard,
  getLeads,
  getLead,
  patchLead,
  getQuotes,
  getTrainings,
  postTraining,
  putTraining,
  removeTraining,
  getSessions,
  postSession,
  putSession,
  removeSession
};
