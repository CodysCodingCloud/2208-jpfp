const Sequelize = require("sequelize");
const db = require("./database");
const Student = db.define("student", {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: true },
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: true },
	},
	email: {
		type: Sequelize.TEXT,
		allowNull: false,
		validate: { notEmpty: false, isEmail: true },
	},
	imageUrl: { type: Sequelize.TEXT, defaultValue: "Portrait_Placeholder.png" },
	gpa: { type: Sequelize.DECIMAL(1, 1), validate: { max: 4.0, min: 0.0 } },
});
module.exports = Student;
