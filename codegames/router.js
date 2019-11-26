const router = require('express').Router();

function words() {
	return words;
}

router.post('/', (req, res) => {
	try {
		const result = words();
		res.status(200).json(result);
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
