const { fetchAll, fetch } = require("../../lib/postgres");

const GET_PATIENTS = `
SELECT
    *
FROM
    patients
`;

const GET_ORDERS = `
SELECT
    *
FROM
    waiting_patients
`;

const GET_ORDER = `
SELECT
    *
FROM
    waiting_patients
WHERE 
    waiting_patient_id = $1
`;

const getPatients = () => fetchAll(GET_PATIENTS);
const getOrders = () => fetchAll(GET_ORDERS);
const getOrder = (waiting_patient_id) => fetch(GET_ORDER, waiting_patient_id);
module.exports = {
  getPatients,
  getOrders,
  getOrder,
};
