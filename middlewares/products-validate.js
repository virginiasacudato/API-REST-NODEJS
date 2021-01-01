// Validación de datos de entrada de Products

const validator = require('validator');


const productsValidation = (req, res, next) => {

    const {name, price} = req.body;

    try {
       const validateName = !validator.isEmpty(name) && validator.isLength(name, { min: 5, max: 255});
       const validatePrice = !validator.isEmpty(price) && validator.isInt(price, { allow_leading_zeroes: false });
       next();
    } catch (e) {
      res.status(400).json({ error : 'Datos inválidos.'});
    }

}

module.exports = {productsValidation};