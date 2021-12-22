const PG = {
  connectionString: "postgres://postgres:68763239@localhost:5432/klinika",
  connectionElString:
    "postgres://fujkdnij:XBr507efxLcM1TsQ1e9u0OQkkm2Bz6hS@tyke.db.elephantsql.com/fujkdnij",
};
const PORT = process.env.PORT || 8030;

module.exports = {
  PG,
  PORT,
};
