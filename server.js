require("dotenv").config();
const express = require("express");


const app = express();

// ================= DB =================
require("./config/dbConfig");

// ================= Middleware =================
app.use(express.json());

// ================= API Routes =================
const portfolioRoute = require("./routes/portfolioRoute");
app.use("/api/portfolio", portfolioRoute);

// Test route
app.get("/", (req, res) => {
  res.send("Backend API running 🚀");
});

// ================= Server =================
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
