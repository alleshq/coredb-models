module.exports = db => {
	// Define Models
	require("./User")(db);
	require("./Session")(db);
	require("./FollowerRelation")(db);
	require("./DevOrg")(db);
	require("./DevOrgMember")(db);
	require("./Application")(db);
	require("./AuthCode")(db);
	require("./AuthToken")(db);
	require("./Post")(db);
	require("./PostInteraction")(db);
	require("./Tag")(db);
	require("./PostTag")(db);
	require("./UserTag")(db);

	return db;
};
