'use strict';
module.exports = function(sequelize, DataTypes) {
  var Address = sequelize.define('Address', {
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    house: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Address.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: 'userId'
        });

      }
    }
  });
  return Address;
};