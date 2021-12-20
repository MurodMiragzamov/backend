const model = require("./model");
const jwt = require("jsonwebtoken");

module.exports = {
  DELETE_OR: async (req, res) => {
    try {
      const { username } = req.body;

      const deleteOr = await model.deleteOr(username);
      res.json(deleteOr);
    } catch (err) {
      console.log(err);
    }
  },
};
