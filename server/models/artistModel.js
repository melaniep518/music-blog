"use strict";

module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    }
  }, {
  	classMethods: {
  		associate: function(models) {
  			Artist.hasMany(models.Project, {as: 'Projects'})
        Artist.belongsToMany(models.Song, {through: "SongFeatures"});
  		}
  	}
  });

  return Artist;
};
