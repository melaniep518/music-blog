"use strict";

module.exports = function(sequelize, DataTypes) {
  var PlaylistComment = sequelize.define("PlaylistComment", {
    comment: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 5000]
      }
    }
  });

  return PlaylistComment;
}