const router = require("express").Router();
const { Campus } = require("../db");

router.get("/", async (req, res, next) => {
	try {
		const data = await Campus.findAll();
		res.send(data);
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
