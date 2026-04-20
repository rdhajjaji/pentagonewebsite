const express = require("express");
const cors = require("cors");
const env = require("./config/env");
const publicRoutes = require("./routes/public.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

app.use(
  cors({
    origin: env.frontendUrl,
    credentials: true
  })
);

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    success: true,
    data: {
      status: "ok"
    }
  });
});

app.use("/", publicRoutes);
app.use("/admin", adminRoutes);

module.exports = app;
