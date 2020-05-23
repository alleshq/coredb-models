const {DataTypes} = require("sequelize");

module.exports = db => {
	db.Post = db.define(
		"post",
		{
			id: {
				primaryKey: true,
				type: DataTypes.UUID,
				allowNull: false
			},
			content: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			image: {
				type: DataTypes.STRING
			},
			score: {
				type: DataTypes.INTEGER,
				allowNull: false
			}
		},
		{
			paranoid: true,
			updatedAt: false
		}
	);

	// Author Association
	db.User.hasMany(db.Post);
	db.Post.belongsTo(db.User);

	// Reply Association
	db.Post.hasMany(db.Post, {
		foreignKey: "parentId",
		as: "children"
	});
	db.Post.belongsTo(db.Post, {
		as: "parent"
	});
};
