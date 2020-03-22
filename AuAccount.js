const {DataTypes} = require("sequelize");

module.exports = db => {
	db.AuAccount = db.define(
		"auAccount",
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
            balance: {
                type: DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            }
		},
		{
			updatedAt: false,
			paranoid: true
		}
	);

	//User and Team Association
	db.User.hasMany(db.AuAccount);
	db.AuAccount.belongsTo(db.User);
	db.Team.hasMany(db.AuAccount);
	db.AuAccount.belongsTo(db.Team);
};
