const mongoose = require('mongoose');

const uri = 'mongodb+srv://mcedes:2022015@cluster0.zisfazb.mongodb.net/camisApp';

async function conectarBD() {
    try {
        await mongoose.connect(uri);
        console.log('Conectado correctamente a MongoDB Atlas con Mongoose actualizado');
    } catch (error) {
        console.log('Error conectando con Mongoose: ', error.message);
    }
}

module.exports = conectarBD;