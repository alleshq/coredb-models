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
			},
			tags: {
				type: DataTypes.TEXT,
				defaultValue: "[]",
				allowNull: false,
				get() {
					return JSON.parse(this.getDataValue("tags"));
				},
				set(value) {
					this.setDataValue("tags", JSON.stringify(value));
				}
			},
			taggedUsers: {
				type: DataTypes.TEXT,
				defaultValue: "[]",
				allowNull: false,
				get() {
					return JSON.parse(this.getDataValue("taggedUsers"));
				},
				set(value) {
					this.setDataValue("taggedUsers", JSON.stringify(value));
				}
			}
		},
		{
			paranoid: true,
			updatedAt: false
		}
	);

	// User Association
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
