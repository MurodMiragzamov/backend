const model = require("./model");
const jwt = require("jsonwebtoken");

module.exports = {
  NEW_PATIENT: async (req, res) => {
    try {
      const { patientName, patientAge, patientPassword } = req.body;
      const token = jwt.sign({ patientName, patientPassword }, "SECRET_KEY");
      const newPatient = await model.newPatient(
        patientName,
        patientAge,
        patientPassword,
        token
      );
      res.json(newPatient);
    } catch (err) {
      console.log(err);
    }
  },
};
