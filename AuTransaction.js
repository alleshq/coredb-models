const {DataTypes} = require("sequelize");

module.exports = db => {
	db.AuTransaction = db.define(
		"auTransaction",
		{
			id: {
				primaryKey: true,
				type: DataTypes.UUID,
				allowNull: false
			},
			amount: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			fee: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			refunded: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false
			}
		},
		{
			updatedAt: false
		}
	);

	//From association
	db.AuAccount.hasMany(db.AuTransaction, {
		as: "outTransactions",
		foreignKey: "fromId"
	});
	db.AuTransaction.belongsTo(db.AuAccount, {
		as: "from"
	});

	//To association
	db.AuAccount.hasMany(db.AuTransaction, {
		as: "inTransactions",
		foreignKey: "toId"
	});
	db.AuTransaction.belongsTo(db.AuAccount, {
		as: "to"
	});
};
