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
			include: Student,
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
		next(error);
	}
});
router.put("/:id", async (req, res, next) => {
	try {
		const updatedCampus = await Campus.findByPk(req.params.id);
		await updatedCampus.update(req.body);
		const newCampusData = await Campus.findByPk(req.params.id, {
			include: Student,
		});
		console.log("new", newCampusData);
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

module.exports = router;
