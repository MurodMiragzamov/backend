const { fetch } = require("../../lib/postgres");

const NEW_WAITING_PATIENT = `
INSERT INTO
  waiting_patients
    (waiting_patient_username,waiting_patient_firstname,waiting_patient_lastname,waiting_patient_phone,waiting_patient_direction_name,waiting_patient_req)
  VALUES
  ($1,$2,$3,$4,$5,$6)
RETURNING waiting_patient_addtime
`;

const newWaitingPatient = (
  waiting_patient_username,
  waiting_patient_firstname,
  waiting_patient_lastname,
  waiting_patient_phone,
  waiting_patient_direction_name,
  waiting_patient_req
) =>
  fetch(
    NEW_WAITING_PATIENT,
    waiting_patient_username,
    waiting_patient_firstname,
    waiting_patient_lastname,
    waiting_patient_phone,
    waiting_patient_direction_name,
    waiting_patient_req ? waiting_patient_req : false
  );

module.exports = {
  newWaitingPatient,
};
