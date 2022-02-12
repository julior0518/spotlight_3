const { Router } = require('express')
const router = Router();

router.get('/', (req, res) => res.send('This is groot!'));

module.exports = router