const db = require("../data/mock-db");

function getDashboard() {
  return {
    totalLeads: db.leads.length,
    newLeads: db.leads.filter((item) => item.status === "nouveau").length,
    quotes: db.leads.filter((item) => item.type === "quote").length,
    activeTrainings: db.trainings.filter((item) => item.active).length,
    upcomingSessions: db.sessions.length
  };
}

function createLead(payload) {
  const item = {
    id: `l-${Date.now()}`,
    fullName: payload.fullName || "",
    email: payload.email || "",
    phone: payload.phone || "",
    company: payload.company || "",
    source: payload.source || "Site web",
    type: payload.type || "contact",
    status: "nouveau",
    createdAt: new Date().toISOString(),
    message: payload.message || "",
    trainingWanted: payload.trainingWanted || "",
    participants: payload.participants || null,
    notes: [],
    history: [{ at: new Date().toISOString(), from: null, to: "nouveau", note: "Lead créé via API" }]
  };

  db.leads.unshift(item);
  return item;
}

function updateLead(id, patch) {
  const lead = db.leads.find((item) => item.id === id);
  if (!lead) return null;

  if (patch.status && patch.status !== lead.status) {
    lead.history.unshift({
      at: new Date().toISOString(),
      from: lead.status,
      to: patch.status,
      note: patch.note || "Statut mis à jour"
    });
    lead.status = patch.status;
  }

  if (patch.note) {
    lead.notes.unshift(patch.note);
  }

  return lead;
}

function createTraining(payload) {
  const item = {
    id: `t-${Date.now()}`,
    active: true,
    objectives: [],
    program: [],
    prerequisites: "",
    targetAudience: "",
    ...payload
  };
  db.trainings.unshift(item);
  return item;
}

function updateTraining(id, payload) {
  const training = db.trainings.find((item) => item.id === id);
  if (!training) return null;
  Object.assign(training, payload);
  return training;
}

function deleteTraining(id) {
  const index = db.trainings.findIndex((item) => item.id === id);
  if (index === -1) return false;
  db.trainings.splice(index, 1);
  return true;
}

function createSession(payload) {
  const item = {
    id: `s-${Date.now()}`,
    ...payload
  };
  db.sessions.unshift(item);
  return item;
}

function updateSession(id, payload) {
  const session = db.sessions.find((item) => item.id === id);
  if (!session) return null;
  Object.assign(session, payload);
  return session;
}

function deleteSession(id) {
  const index = db.sessions.findIndex((item) => item.id === id);
  if (index === -1) return false;
  db.sessions.splice(index, 1);
  return true;
}

module.exports = {
  getDashboard,
  createLead,
  updateLead,
  createTraining,
  updateTraining,
  deleteTraining,
  createSession,
  updateSession,
  deleteSession
};
