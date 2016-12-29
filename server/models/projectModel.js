"use strict";

module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
  	name: {
		type: DataTypes.STRING,
		validate: {
			len: [1, 100]
		}
	},
	releaseDate: {
		type: DataTypes.STRING,
		validate: {
			len: [1, 20]
		}

	}
  }, {
  	classMethods: {
  		associate: function(models) {
  			Project.hasMany(models.Song, {as: 'Tracks'});
  		}
  	}
  });

  return Project;
};
	


