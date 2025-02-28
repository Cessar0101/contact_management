const Contacto = require('../models/Contacto');

const contactoController = {
    getContactos: async (req, res) => {
        try {
            const contactos = await Contacto.find();
            res.json(contactos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    crearContacto: async (req, res) => {
        try {
            const contacto = new Contacto(req.body);
            await contacto.save();
            res.status(201).json(contacto);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    actualizarContacto: async (req, res) => {
        try {
            const contacto = await Contacto.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(contacto);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    eliminarContacto: async (req, res) => {
        try {
            await Contacto.findByIdAndDelete(req.params.id);
            res.json({ mensaje: 'Contacto eliminado' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = contactoController;
