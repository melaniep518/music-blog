"use strict";

module.exports = function(sequelize, DataTypes) {
  var Song = sequelize.define("Song", {
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    }
  }, {
  	classMethods: {
  		associate: function(models) {
  			Song.belongsTo(models.Artist);
  			Song.belongsToMany(models.Playlist, {through: "playlistSongs"});
  		}
  	}
  });

  return Song;
};
