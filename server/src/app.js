const App = require("express")();
const morgan = require("morgan");
const cors = require("cors");

/* -------------------------- CONFIG -------------------------- */
App.use(require("express").json());

/* -------------------------- CORS -------------------------- */
App.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'token', 'X-Requested-With', "Access-Control-Allow-Headers"],
    credentials: true,
    maxAge: 86400
}));

/* -------------------------- LOGS -------------------------- */
const fs = require('fs');
const path = require("path");

App.use(morgan('[:date[clf]] \\ :method - :status --- :url (:total-time[digits]ms)', { stream: fs.createWriteStream( path.join(__dirname, '../logs/access.log'), { flags: 'a' })}));
App.use(morgan("[:date[clf]] \\ :method - :status --- :url (:total-time[digits]ms)"));

/* -------------------------- ROUTERS -------------------------- */
const router_auth = require("./routes/api.auth.routes");
App.use("/api/v1/auth", router_auth);

/* -------------------------- INIT -------------------------- */
App.listen(4400, () => {
    console.log(`[Server API] Funcionando en ${process.env.SERVER_URL}`);
});