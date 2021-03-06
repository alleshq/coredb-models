const {DataTypes} = require("sequelize");

module.exports = db => {
	db.User = db.define(
		"user",
		{
			id: {
				primaryKey: true,
				type: DataTypes.UUID,
				allowNull: false
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false
			},
			password: {
				type: DataTypes.STRING
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			nickname: {
				type: DataTypes.STRING,
				allowNull: false
			},
			avatar: {
				type: DataTypes.STRING
			},
			reputation: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				allowNull: false
			},
			rubies: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				allowNull: false
			},
			private: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
				allowNull: false
			},
			about: {
				type: DataTypes.STRING,
				allowNull: false
			},
			plus: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
				allowNull: false
			},
			stripeCustomerId: {
				type: DataTypes.STRING
			},
			color: {
				type: DataTypes.STRING
			},
			newNotifications: {
				type: DataTypes.DATE
			}
		},
		{
			updatedAt: false,
			paranoid: true
		}
	);

	// Primary/Secondary Association
	db.User.hasMany(db.User, {
		foreignKey: "primaryId",
		as: "secondaries"
	});
	db.User.belongsTo(db.User, {
		as: "primary"
	});
};
