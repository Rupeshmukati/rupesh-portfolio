const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

// DB
require("./config/dbConfig");

// Middleware
app.use(express.json());

// API Routes
const portfolioRoute = require("./routes/portfolioRoute");
app.use("/api/portfolio", portfolioRoute);

// Test API
app.get("/api", (req, res) => {
  res.send("API is running...");
});

/**
 * ==============================
 * PRODUCTION – SERVE REACT BUILD
 * ==============================
 */
if (process.env.NODE_ENV === "production") {
  // Render runs server from /src
  const buildPath = path.join(__dirname, "..", "client", "build");

  app.use(express.static(buildPath));

  // ✅ Express 5 SAFE wildcard (NO *)
  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

// Port (Render provides PORT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
