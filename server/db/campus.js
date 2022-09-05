const Sequelize = require("sequelize");
const db = require("./database");
const Campus = db.define("campus", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: true },
	},
	imageUrl: {
		type: Sequelize.TEXT,
		defaultValue: "/placeholder-company.png",
	},
	address: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: {
				args: true,
				msg: "please input an address",
			},
		},
	},
	description: {
		type: Sequelize.TEXT,
	},
});
module.exports = Campus;
Campus.beforeUpdate((campus) => {
	if (campus.imageUrl === "") {
		campus.imageUrl = "/placeholder-company.png";
	}
	return campus;
});
