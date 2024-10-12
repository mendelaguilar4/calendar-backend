const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Crear Server Express
const app = express();

// Base de Datos
dbConnection();

// CORS
app.use(cors());

// Directorio Público
app.use( express.static('public') );

// Lectura y Parseo del Body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: Eventos.


// Escuchar Peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
} );