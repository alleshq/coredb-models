const {DataTypes} = require("sequelize");

module.exports = db => {
	db.DevOrgMember = db.define(
		"devOrgMember",
		{
			role: {
				type: DataTypes.ENUM("admin", "write", "read"),
				allowNull: false
			}
		},
		{
			updatedAt: false
		}
	);

	// Org/User Association
	db.User.belongsToMany(db.Team, {
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
