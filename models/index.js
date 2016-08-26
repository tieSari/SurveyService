var Database = require('../db/connection');

var Survey= Database.sequelize.define('Survey', {
  id: { type: Database.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: Database.DataTypes.STRING,
  description: Database.DataTypes.TEXT
});
var Person = Database.sequelize.define('Person', {
  id: { type: Database.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: Database.DataTypes.STRING,
  phone: Database.DataTypes.STRING,
  email: Database.DataTypes.STRING,
  surveyid: Database.DataTypes.INTEGER
});

var User = Database.sequelize.define('User', {
  id: { type: Database.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: Database.DataTypes.STRING,
  password: Database.DataTypes.STRING,
});

Person.belongsTo(Survey);
Survey.hasMany(Person);

module.exports = {
  Survey: Survey,
  Person: Person,
  User: User
};
