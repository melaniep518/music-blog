"use strict";

module.exports = function(sequelize, DataTypes) {
  let Producer = sequelize.define("Producer", {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Producer.belongsToMany(models.Song, {through: "SongProducers"});
      }
    }
  });

  return Producer;
}