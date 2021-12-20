const PG = {
  connectionString: "postgres://postgres:68763239@localhost:5432/klinika",
};
const PORT = process.env.PORT || 8030;

module.exports = {
  PG,
  PORT
};
