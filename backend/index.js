const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const contactoRoutes = require('./routes/contactoRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Ruta raíz
app.get('/', (req, res) => {
    res.json({ mensaje: 'API de Contactos funcionando' });
});

// Rutas
app.use('/api/contactos', contactoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
