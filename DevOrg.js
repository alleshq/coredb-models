const {DataTypes} = require("sequelize");

module.exports = db => {
	db.DevOrg = db.define(
		"devOrg",
		{
			id: {
				primaryKey: true,
				type: DataTypes.UUID,
				allowNull: false
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			color: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			updatedAt: false,
			paranoid: true
		}
	);
};
