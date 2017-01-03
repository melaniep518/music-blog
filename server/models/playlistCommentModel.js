"use strict";

module.exports = function(sequelize, DataTypes) {
  var PlaylistComment = sequelize.define("PlaylistComment", {
    user: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50]
      }
    },
    comment: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 5000]
      }
    }
  });

  return PlaylistComment;
}