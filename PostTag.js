module.exports = db => {
	db.postTag = db.define(
		"postTag",
		{},
		{
			timestamps: false
		}
	);

	// Post/Tag Association
	db.Tag.belongsToMany(db.Post, {
		through: db.PostTag
	});
	db.Post.belongsToMany(db.Tag, {
		through: db.PostTag
	});
};
