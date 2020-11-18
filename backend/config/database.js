const config = require('./');

const db = config.db;
const name = db.name;
const password = db.password;
const database = db.database;
const host = db.host;

console.log(config)

module.exports = {
  development: {
    name,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  test: {
    dialect: "sqlite",
    DB_CONN: "sqlite.memory",
    logging: false,
    seederStorage: 'sequelize',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
};
