// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require("./database");
const Student = require("./student");
const Campus = require("./campus");
const { studentSeed, campusSeed } = require("./seed");

Student.belongsTo(Campus);
Campus.hasMany(Student);

const syncAndSeed = async () => {
	try {
		await db.sync({ force: true });
		await Promise.all(
			studentSeed.map((student) => {
				return Student.create(student);
			})
		);
		await Promise.all(
			campusSeed.map((campus) => {
				return Campus.create(campus);
			})
		);
		console.log(`Seeding successful!`);
	} catch (error) {}
};

module.exports = {
	// Include your models in this exports object as well!
	db,
	Student,
	Campus,
	syncAndSeed,
};
