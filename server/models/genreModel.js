"use strict";

module.exports = function(sequelize, DataTypes) {
  var Genre = sequelize.define("Genre", {
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Genre.belongsToMany(models.Song, {through: "SongGenres"});
      }
    }
  });

  return Genre;
}