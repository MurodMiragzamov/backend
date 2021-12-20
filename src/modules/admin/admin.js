const model = require("./model");

module.exports = {
  GET_PATIENTS: async (_, res) => {
    try {
      const patients = await model.getPatients();
      res.json(patients);
    } catch (err) {
      console.log(err);
    }
  },

  GET_ORDERS: async (_, res) => {
    try {
      const orders = await model.getOrders();
      res.json(orders);
    } catch (err) {
      console.log(err);
    }
  },

  GET_ORDER: async (req, res) => {
    try {
      const { Id } = req.params;
      const getOrder = await model.getOrder(Id);
      res.json(getOrder);
    } catch (err) {
      console.log(err);
    }
  },
};
