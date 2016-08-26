var Database = require('./connection');

var User = Database.sequelize.define('User', {
  id: { type: Database.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: Database.DataTypes.STRING,
  password: Database.DataTypes.STRING
});

var Survey = Database.sequelize.define('Survey', {
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

Person.belongsTo(Survey);
Survey.hasMany(Person);

Database.sequelize.sync();
