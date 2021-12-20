const { fetch } = require("../../lib/postgres");

const NEW_PATIENT = `
INSERT INTO 
    patients(patient_username,patient_age,patient_password)
VALUES($1,$2,$3)
RETURNING *
`;

const newPatient = (patient_username, patient_age, patient_password) =>
  fetch(NEW_PATIENT, patient_username, patient_age, patient_password);

module.exports = {
  newPatient,
};
