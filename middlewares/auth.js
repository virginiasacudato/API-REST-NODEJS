const jwt = require ('jsonwebtoken');
const fs = require('fs');
const key = fs.readFileSync('./keys/public.pem'); // Lectura de clave pública para desencriptar 

const verifyToken = (req, res, next) => {
    try {
       const {authorization} = req.headers;
       const {_id} = jwt.verify(authorization, key); // Verifico en función de la autorización del headers y la clave pública
       req._id = _id; // Creo una propiedad global de mi objeto request, ObjectId del usuario    
       // Continuamos
       next();
      } catch (e) {
      console.error(e)
      res.status(401).json({message : 'No autorizado.'})
    }
} 

module.exports = {verifyToken};