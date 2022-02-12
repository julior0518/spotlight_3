const { Taco, } = require('../models');




/////////////// CREATE

const createTaco = async (req, res) => {
    try {
        const esteTaco = await new Taco(req.body);
        await esteTaco.save();
        return res.status(201).json({
            esteTaco,
        });
        } catch (error) {
        return res.status(500).json({ error: error.message });
        }
    };

//////////////// READ

const getAllTacos = async (req, res) => {
    try {
        const todosLosTacos = await Taco.find();
        return res.status(200).json({ todosLosTacos });
        } catch (error) {
        return res.status(500).send(error.message);
        }
    }; 

const getTacosById = async (req, res) => {
    try {
        const { id } = req.params;
        const esteTacoId = await Taco.findById(id);
        if (esteTacoId) {
        return res.status(200).json({ esteTacoId });
        }
        return res.status(404).send('This ID is not real');
    } catch (error) {
        return res.status(500).send(error.message);
    }
    };

/////////////// UPDATE

const updateTaco = async (req, res) => {
    try {
    const { id } = req.params;
    Taco.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
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

const deleteTaco = async (req, res) => {
    try {
    const { id } = req.params;
    const deleted = await Taco.findByIdAndDelete(id);
    if (deleted) {
        return res.status(200).send('deleted');
    }
    throw new Error('not found');
} catch (error) {
    return res.status(500).send(error.message);
}
};  


module.exports = {
    createTaco,
    getTacosById,
    getAllTacos,
    updateTaco,
    deleteTaco,

} 