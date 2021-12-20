const model = require("./model");

module.exports = {
  GET_DIRECTIONS: async (_, res) => {
    try {
      const directions = await model.getDirections();
      res.json(directions);
    } catch (err) {
      console.log(err);
    }
  },
};
