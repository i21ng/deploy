const mongoose = require('mongoose');
const { Schema } = mongoose;

const animalSchema = new Schema({
    nombre: String,
    tipo: String,
    color: String
});

mongoose.model('animales', animalSchema);

