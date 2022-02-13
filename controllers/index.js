const { Movie, Role } = require('../models');




/////////////// CREATE

const createMovie = async (req, res) => {
    try {
        const esteMovie = await new Movie(req.body);
        await esteMovie.save();
        return res.status(201).json({
            esteMovie,
        });
        } catch (error) {
        return res.status(500).json({ error: error.message });
        }
    };

const createRole = async (req, res) => {
    try {
        const esteRole = await new Role(req.body);
        await esteRole.save();
        return res.status(201).json({
            esteRole,
        });
        } catch (error) {
        return res.status(500).json({ error: error.message });
        }
    };

//////////////// READ

const getAllMovies = async (req, res) => {
    try {
        const todosLosMovies = await Movie.find();
        return res.status(200).json({ todosLosMovies });
        } catch (error) {
        return res.status(500).send(error.message);
        }
    }; 

const getAllRoles = async (req, res) => {
    try {
        const todosLosRoles = await Role.find();
        return res.status(200).json({ todosLosRoles });
        } catch (error) {
        return res.status(500).send(error.message);
        }
    }; 

const getMoviesById = async (req, res) => {
    try {
        const { id } = req.params;
        const esteMovieId = await Movie.findById(id);
        if (esteMovieId) {
        return res.status(200).json({ esteMovieId });
        }
        return res.status(404).send('This ID is not real');
    } catch (error) {
        return res.status(500).send(error.message);
    }
    };

    const getRoleByMoviesId = async (req, res) => {
        try {
            const { id } = req.params;
            const esteRoleMoviesId = await Role.find({movie: id});
            if (esteRoleMoviesId) {
            return res.status(200).json({ esteRoleMoviesId });
            }
            return res.status(404).send('This ID is not real');
        } catch (error) {
            return res.status(500).send(error.message);
        }
        };

/////////////// UPDATE

const updateMovie = async (req, res) => {
    try {
    const { id } = req.params;
    Movie.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
        if (err) {
        res.status(500).send(err);
        }
        if (!user) {
        res.status(500).send('not found!');
        }
        return res.status(200).json(user);
    });
    } catch (error) {
    return res.status(500).send(error.message);
    }
};

//////////////// DELETE

const deleteMovie = async (req, res) => {
    try {
    const { id } = req.params;
    const deleted = await Movie.findByIdAndDelete(id);
    if (deleted) {
        return res.status(200).send('deleted');
    }
    throw new Error('not found');
} catch (error) {
    return res.status(500).send(error.message);
}
};  


module.exports = {
    createMovie,
    getAllMovies,
    getMoviesById,
    updateMovie,
    deleteMovie,
    createRole,
    getAllRoles,
    getRoleByMoviesId

} 