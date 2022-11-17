const express = require("express");
const Refer = require("./models/userSchema");

const app = express();
app.use(express.json());

const refer = require("./routes/refer.routes");

app.use("/",refer)

const { createConnection } = require("./db/db");
const port = process.env.PORT || 5000;

createConnection();

app.listen(port, console.log(`server started successfully ${port}!`));
