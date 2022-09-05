const router = require("express").Router();
const { Campus, Student } = require("../db");

router.get("/", async (req, res, next) => {
	try {
		const CampusList = await Campus.findAll({ order: [["id", "ASC"]] });
		res.send(CampusList);
	} catch (error) {
		next(error);
	}
});
router.get("/:id", async (req, res, next) => {
	try {
		const campusData = await Campus.findByPk(req.params.id, {
			include: { model: Student },
			order: [[Student, "id", "ASC"]],
		});
		res.status(201).send(campusData);
	} catch (error) {
		res.status(400).send(error);
	}
});
router.post("/", async (req, res, next) => {
	try {
		const newCampus = await Campus.create(req.body);
		console.log("newCampus", newCampus);
		res.send(newCampus);
	} catch (error) {
		if ((error.name = "SequelizeValidationError")) {
			res.status(400).send(error.errors[0].message);
		} else {
			next(error);
		}
	}
});
router.put("/:id", async (req, res, next) => {
	try {
		const updatedCampus = await Campus.findByPk(req.params.id);
		await updatedCampus.update(req.body);
		const newCampusData = await Campus.findByPk(req.params.id, {
			include: Student,
		});
		res.send(newCampusData);
	} catch (error) {
		next(error);
	}
});
router.delete("/:id", async (req, res, next) => {
	try {
		const deletedCampus = await Campus.findByPk(req.params.id);
		await deletedCampus.destroy();
		res.send(deletedCampus);
	} catch (error) {
		next(error);
	}
});
router.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(404).send("Something broke!");
});
module.exports = router;
