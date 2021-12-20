const { fetchAll } = require("../../lib/postgres");

const HISTORY = `
SELECT
    *
FROM
    history
`;

const history = () => fetchAll(HISTORY);

module.exports = {
  history,
};
