module.exports = db => {
	// Define Models
	require("./User")(db);
	require("./Session")(db);
	require("./FollowerRelation")(db);
	require("./Team")(db);
	require("./TeamMember")(db);
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
