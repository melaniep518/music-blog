"use strict";

module.exports = function(sequelize, DataTypes) {
  var PlaylistVote = sequelize.define("PlaylistVote", {
    vote: {
      type: DataTypes.BOOLEAN
    }
  });

  return PlaylistVote;
};