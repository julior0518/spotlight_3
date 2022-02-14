const { Router } = require('express')
const router = Router();
const controllers = require('../controllers');

router.get('/', (req, res) => res.render('movies'));

router.post('/movies', controllers.createMovie);
router.get('/movies', controllers.getAllMovies);
router.get('/movies/:id', controllers.getMoviesById);
router.put('/movies/:id', controllers.updateMovie);
router.delete('/movies/:id', controllers.deleteMovie);

router.post('/roles', controllers.createRole);
router.get('/roles', controllers.getAllRoles);
router.get('/roles/:id', controllers.getRoleByMoviesId);

router.post('/actors', controllers.createActor);
router.get('/actors', controllers.getAllActors);
router.get('/actors/:id', controllers.getActorsByRolesId);




module.exports = router