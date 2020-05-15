const {DataTypes} = require("sequelize");

module.exports = db => {
	db.PostInteraction = db.define("postInteraction", {
		vote: {
			type: DataTypes.ENUM("up", "neutral", "down"),
			defaultValue: "neutral",
			allowNull: false
		}
	});

	// Post/User Association
	db.User.belongsToMany(db.Post, {
		as: "viewedPosts",
		through: db.PostInteraction,
		foreignKey: "userId",
		otherKey: "postId"
	});
	db.Post.belongsToMany(db.User, {
		as: "viewers",
		through: db.PostInteraction,
		foreignKey: "postId",
		otherKey: "userId"
	});
};
