const { Router } = require("express");
// const { NEW_PATIENT } = require("./registration/registration");
// const { GET_DIRECTIONS } = require("./directions/directions");
// const { GET_ADMINS } = require("./admin/admin");
// const { GET_PATIENTS } = require("./admin/admin");
// const { GET_ORDERS } = require("./admin/admin");
// const { GET_ORDER } = require("./admin/admin");
// const { NEW_WAITING_PATIENT } = require("./orders/orders");
// const { DELETE_OR } = require("./clear-order/cls");
// const { HISTORY } = require("./history/history");
const { GET_USERS, NEW_USER } = require("./log/log");
const router = new Router();

router.get("/users", GET_USERS).post("/newUser", NEW_USER);
// .post("/register", NEW_PATIENT)
// .get("/yonalish", GET_DIRECTIONS)
// .get("/admin/login", GET_ADMINS)
// .get("/admin/patients", GET_PATIENTS)
// .get("/admin/orders", GET_ORDERS)
// .get("/admin/:Id", GET_ORDER)
// .post("/newOrder", NEW_WAITING_PATIENT)
// .post("/submitOrder", DELETE_OR)
// .get("/history", HISTORY);

module.exports = router;
