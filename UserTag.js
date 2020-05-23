module.exports = db => {
	db.UserTag = db.define(
		"userTag",
		{},
		{
			timestamps: false
		}
	);

	// Post/User Association
	db.User.belongsToMany(db.Post, {
		as: "mentions",
		through: db.UserTag,
		foreignKey: "userId",
		otherKey: "postId"
	});
	db.Post.belongsToMany(db.User, {
		as: "taggedUsers",
		through: db.UserTag,
		foreignKey: "postId",
		otherKey: "userId"
	});
};
