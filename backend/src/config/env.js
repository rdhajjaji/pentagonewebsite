const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: process.env.PORT || 4000,
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",
  adminEmail: process.env.ADMIN_EMAIL || "admin@pentagone-formations.com",
  adminPassword: process.env.ADMIN_PASSWORD || "admin123"
};
