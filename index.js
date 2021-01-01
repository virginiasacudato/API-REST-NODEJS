const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.DB_PORT || 3900 ;

// const MONGO_URI = 'mongodb://localhost/notes-app'

mongoose.connect(process.env.DB_HOST, {useUnifiedTopology: true, useNewUrlParser: true})
        .then(() => {
            console.log('Conexión realizada correctamente.');
         app.listen(port, () => {
                console.log('Servidor corriendo en http://localhost:'+ port);
                });
            })
        .catch(err => console.log('Error de base de datos -> ', err))
