const path = require("path");
require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const app = express();
require("../config/database");
const cors = require("cors");
const userRoutes = require("./routes/user");
const saucesRoutes = require("./routes/sauces");

app.use(express.json());
app.use(
  cors({
    origin: "https://p6.rodolpheanger.fr",
    methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    allowedHeaders:
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    credentials: true, // Inclure les cookies dans les requêtes (si nécessaire)
  })
);

app.use("/images", express.static(path.join(__dirname, "../images")));
app.use("/api/auth", userRoutes);
app.use("/api/sauces", saucesRoutes);

module.exports = app;
