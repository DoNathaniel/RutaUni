const express = require("express");
const API_AUTH = express.Router();

/* -------------------------- IMPORTS -------------------------- */
const AuthLogin = require("../controllers/Auth/Auth.login");

/* -------------------------- ROUTES -------------------------- */
API_AUTH.get("/login", AuthLogin);

/* -------------------------- EXPORT -------------------------- */
module.exports = API_AUTH;