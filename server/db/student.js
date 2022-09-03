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
	imageUrl: {
		type: Sequelize.TEXT,
		defaultValue: "/placeholder-portrait.png",
	},
	email: {
		type: Sequelize.TEXT,
		allowNull: false,
		validate: { notEmpty: false, isEmail: true },
	},
	gpa: { type: Sequelize.DECIMAL(2, 1), validate: { max: 4.0, min: 0.0 } },
});
module.exports = Student;
