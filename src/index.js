// Minimal entry point so the dependency graph is realistic. This repository is a disposable
// VibeShield test fixture: never run or deploy it.
const express = require("express");

const app = express();
app.get("/health", (_req, res) => res.json({ ok: true }));

module.exports = app;
