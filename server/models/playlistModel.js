"use strict";

module.exports = function(sequelize, DataTypes) {
  var Playlist = sequelize.define("Playlist", {
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    }
  }, {
  	classMethods: {
  		associate: function(models) {
  			Playlist.belongsToMany(models.Song, {through: "playlistSongs"});
        Playlist.hasMany(models.PlaylistVote, {as: "Votes"});
        Playlist.hasMany(models.PlaylistComment, {as: "Comments"});
  		}
  	}
  });

  return Playlist;
};
