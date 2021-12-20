const model = require("./model");

module.exports = {
  NEW_WAITING_PATIENT: async (req, res) => {
    try {
      const {
        waiting_patient_username,
        waiting_patient_firstname,
        waiting_patient_lastname,
        waiting_patient_phone,
        waiting_patient_direction_name,
        waiting_patient_req,
      } = req.body;
      const newWaitingPatient = await model.newWaitingPatient(
        waiting_patient_username,
        waiting_patient_firstname,
        waiting_patient_lastname,
        waiting_patient_phone,
        waiting_patient_direction_name,
        waiting_patient_req
      );
      res.json(newWaitingPatient);
    } catch (err) {
      console.log(err);
    }
  },
};
