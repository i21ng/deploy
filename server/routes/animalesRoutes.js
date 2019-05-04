const mongoose = require('mongoose');
const Animal = mongoose.model('animales');

module.exports = (app) => {
    app.get('/api/animales', async (req, res) => {
        const animales = await Animal.find({});
        res.send(animales);
    })
};
