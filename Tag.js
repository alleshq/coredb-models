const {DataTypes} = require("sequelize");

module.exports = db => {
	db.Tag = db.define(
		"tag",
		{
			id: {
				primaryKey: true,
				type: DataTypes.STRING(64),
				allowNull: false
			},
			image: {
				type: DataTypes.STRING
			},
			title: {
				type: DataTypes.STRING
			},
			description: {
				type: DataTypes.STRING
			},
			url: {
				type: DataTypes.STRING
			}
		},
		{
			updatedAt: false
		}
	);
};
