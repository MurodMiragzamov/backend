const { Router } = require("express");
const { NEW_PATIENT } = require("./registration/registration");
const { GET_DIRECTIONS } = require("./directions/directions");
const { GET_PATIENTS } = require("./admin/admin");
const { GET_ORDERS } = require("./admin/admin");
const { GET_ORDER } = require("./admin/admin");

const router = new Router();

router
  .post("/register", NEW_PATIENT)
  .get("/yonalish", GET_DIRECTIONS)
  .get("/admin/patients", GET_PATIENTS)
  .get("/admin/orders", GET_ORDERS)
  .get("/admin/:Id", GET_ORDER);

module.exports = router;
