const { Router } = require('express')
const router = Router();
const controllers = require('../controllers');

router.get('/', (req, res) => res.send('This is groot!'));

router.post('/tacos', controllers.createTaco);
router.get('/tacos', controllers.getAllTacos);
router.get('/tacos/:id', controllers.getTacosById);
router.put('/tacos/:id', controllers.updateTaco);
router.delete('/tacos/:id', controllers.deleteTaco);

module.exports = router