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
  app.use(express.static(path.join(__dirname, "client/build")));

  // ✅ FINAL FIX: Use regex fallback instead of '*'
  app.get(/^\/.*$/, (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
