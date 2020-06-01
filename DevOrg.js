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
			verified: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
				allowNull: false
			},
			stardust: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				allowNull: false
			}
		},
		{
			updatedAt: false,
			paranoid: true
		}
	);
};
