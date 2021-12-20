const { fetchAll } = require("../../lib/postgres");

const GET_DIRECTIONS = `
SELECT
    *
FROM
    directions
`;

const getDirections = () => fetchAll(GET_DIRECTIONS);

module.exports = {
  getDirections,
};
