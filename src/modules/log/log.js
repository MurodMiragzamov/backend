const model = require("./model");

module.exports = {
  NEW_USER: async (req, res) => {
    try {
      const { user_name, user_phone, user_email, user_password } = req.body;

      const newUser = await model.newUser(
        user_name,
        user_phone,
        user_email,
        user_password
      );
      res.json(newUser);
    } catch (err) {
      console.log(err);
    }
  },

  GET_USERS: async (_, res) => {
    try {
      const users = await model.getUsers();
      res.json(users);
    } catch (err) {
      console.log(err);
    }
  },
};
