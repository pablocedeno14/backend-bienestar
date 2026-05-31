const pool = require('../database/db');

const obtenerServicios = async (req, res) => {
    try {
        // Hacemos la consulta a la tabla de tu grupo
        const [rows] = await pool.query('SELECT * FROM servicios_bienestar');
        res.json(rows);
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ mensaje: 'Error al obtener los servicios de bienestar' });
    }
};

module.exports = { obtenerServicios };