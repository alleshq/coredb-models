const {DataTypes} = require("sequelize");

module.exports = db => {
	db.DevOrgMember = db.define(
		"devOrgMember",
		{
			admin: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			accepted: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false
			}
		},
		{
			updatedAt: false
		}
	);

	// Org/User Association
	db.User.belongsToMany(db.DevOrg, {
		as: "devOrgs",
		through: db.DevOrgMember,
		foreignKey: "userId",
		otherKey: "orgId"
	});
	db.DevOrg.belongsToMany(db.User, {
		as: "members",
		through: db.DevOrgMember,
		foreignKey: "orgId",
		otherKey: "userId"
	});
};
