const express = require("express");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();

// DB
require("./config/dbConfig");

// Middleware
app.use(express.json());

// --- UPDATE: Sirf ek baar static folder define karein aur path.join use karein ---
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API routes - Is line ko API call handle karne ke liye yahan hona chahiye
app.use("/api/portfolio", require("./routes/portfolioRoute")); //

// Serve React build (PRODUCTION)
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "client", "build");
  app.use(express.static(buildPath));

  // 🔥 FIXED ROUTE: Isse hamesha API routes ke NICHE rakhein
  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
