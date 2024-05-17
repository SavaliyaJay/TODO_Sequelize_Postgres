const Model = require('../models/crud.model');

exports.fetchAllList = async (req, res) => {
    try {
        const data = await Model.findAll({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.insertList = async (req, res) => {
    try {
        const data = await Model.create(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}