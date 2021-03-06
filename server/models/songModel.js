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
        Song.belongsTo(models.Project);
  			Song.belongsToMany(models.Playlist, {through: "PlaylistSongs"});
        Song.belongsToMany(models.Genre, {through: "SongGenres"});
        Song.belongsToMany(models.Producer, {through: "SongProducers"});
        Song.belongsToMany(models.Artist, {through: "SongFeatures"});
  		}
  	}
  });

  return Song;
};
