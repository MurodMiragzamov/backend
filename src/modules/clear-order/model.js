const { fetch } = require("../../lib/postgres");

const DELETE_OR = `
DELETE FROM 
waiting_patients
WHERE
waiting_patient_username = $1
RETURNING *
`;

const deleteOr = (waiting_patients) => fetch(DELETE_OR, waiting_patients);

module.exports = {
  deleteOr,
};
