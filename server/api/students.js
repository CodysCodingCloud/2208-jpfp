const router = require("express").Router();
const { Student, Campus } = require("../db");

router.get("/", async (req, res, next) => {
	try {
		const studentList = await Student.findAll({ order: [["id", "ASC"]] });
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
router.post("/", async (req, res, next) => {
	try {
		const newStudent = await Student.create(req.body);
		res.send(newStudent);
	} catch (error) {
		if (
			error.name === "SequelizeUniqueConstraintError" ||
			error.name === "SequelizeValidationError"
		) {
			res.status(400).send(error);
		} else {
			next(error);
		}
	}
});
router.put("/:id", async (req, res, next) => {
	try {
		const updatedStudent = await Student.findByPk(req.params.id);
		await updatedStudent.update(req.body);
		const updatedstudentProfile = await Student.findByPk(req.params.id, {
			include: Campus,
		});
		res.send(updatedstudentProfile);
	} catch (error) {
		next(error);
	}
});
router.delete("/:id", async (req, res, next) => {
	try {
		const deleteStudent = await Student.findByPk(req.params.id);
		await deleteStudent.destroy();
		res.send(deleteStudent);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
