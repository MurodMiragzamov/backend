const { fetch, fetchAll } = require("../../lib/postgres");

const NEW_USER = `
INSERT INTO 
      users(user_name,
        user_phone,
        user_email,
        user_password)
VALUES($1,$2,$3,$4)

`;
const GET_USERS = `
SELECT
    *
FROM
    users
`;

const getUsers = () => fetchAll(GET_USERS);

const newUser = (user_name, user_phone, user_email, user_password) =>
  fetch(NEW_USER, user_name, user_phone, user_email, user_password);

module.exports = {
  newUser,
  getUsers,
};
