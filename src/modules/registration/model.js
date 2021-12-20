const { fetch } = require("../../lib/postgres");

const NEW_PATIENT = `
INSERT INTO 
    patients(patient_username,patient_age,patient_password,patient_token)
VALUES($1,$2,$3,$4)
RETURNING *
`;

const newPatient = (
  patient_username,
  patient_age,
  patient_password,
  patient_token
) =>
  fetch(
    NEW_PATIENT,
    patient_username,
    patient_age,
    patient_password,
    patient_token
  );

module.exports = {
  newPatient,
};
