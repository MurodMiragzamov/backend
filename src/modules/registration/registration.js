const model = require("./model");

module.exports = {
  NEW_PATIENT: async (req, res) => {
    try {
      const { patientName, patientAge, patientPassword } = req.body;
      const newPatient = await model.newPatient(
        patientName,
        patientAge,
        patientPassword
      );
      res.json(newPatient);
    } catch (err) {
      console.log(err);
    }
  },
};
