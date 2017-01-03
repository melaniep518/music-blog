"use strict";

module.exports = function(sequelize, DataTypes) {
  var PlaylistVote = sequelize.define("PlaylistVote", {
    upvote: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
    },
    downvote: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
    }
  });

  return PlaylistVote;
};