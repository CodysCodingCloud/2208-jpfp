const router = require("express").Router();
const { Student, Campus } = require("../db");

router.get("/", async (req, res, next) => {
	try {
		const studentList = await Student.findAll();
		res.send(studentList);
	} catch (error) {
		next(error);
	}
});
router.get("/:id", async (req, res, next) => {
	try {
		const studentProfile = await Student.findByPk(req.params.id, {
			include: Campus,
		});
		res.send(studentProfile);
	} catch (error) {
		next(error);
	}
});
// router.post("/", async (req, res, next) => {
// 	try {
// 		const data = await Students.create(req.body);
// 		res.sendStatus(data);
// 	} catch (error) {
// 		next(error);
// 	}
// });

module.exports = router;
