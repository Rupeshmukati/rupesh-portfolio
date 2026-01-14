const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

// DB connection
require("./config/dbConfig");

// Middleware
app.use(express.json());

// Routes
const portfolioRoute = require("./routes/portfolioRoute");
app.use("/api/portfolio", portfolioRoute);

// Test API (optional)
app.get("/api", (req, res) => {
  res.send("API is running...");
});

// Production: Serve React build
if (process.env.NODE_ENV === "production") {
  // Static files ke liye sahi path setup
  const buildPath = path.resolve(__dirname, "client", "build");
  app.use(express.static(buildPath));

  // Sari requests ko index.html par redirect karein
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(buildPath, "index.html"));
  });
}

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
