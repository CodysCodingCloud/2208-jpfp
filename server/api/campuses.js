const router = require("express").Router();
const { Campus, Student } = require("../db");

router.get("/", async (req, res, next) => {
	try {
		const CampusList = await Campus.findAll();
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
		res.send(campusData);
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
