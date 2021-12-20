const express = require("express");
const app = express();
const router = require("./src/modules/routes");
const cors = require("cors");
const PORT = process.env.PORT || 8030;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, console.log(PORT));
