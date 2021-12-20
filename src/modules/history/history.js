const model = require("./model");

module.exports = {
  HISTORY: async (_, res) => {
    try {
      const history = await model.history();
      res.json(history);
    } catch (err) {
      console.log(err);
    }
  },
};
