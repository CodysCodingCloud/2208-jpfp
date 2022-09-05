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
		unique: {
			arg: true,
			msg: "This e-mail has already been registered please try a different email address",
		},
		validate: {
			notEmpty: false,
			isEmail: {
				args: true,
				msg: "this is not a valid email",
			},
		},
	},
	gpa: { type: Sequelize.DECIMAL(2, 1), validate: { max: 4.0, min: 0.0 } },
});
Student.beforeUpdate((student) => {
	if (student.imageUrl === "") {
		student.imageUrl = "/placeholder-portrait.png";
	}
	return student;
});
module.exports = Student;
