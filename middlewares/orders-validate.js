// Validación de datos de entrada de Orders

const validator = require('validator');


const ordersValidation = (req, res, next) => {

    const {quantity} = req.body;

    try {
       const validateQuantity = !validator.isInt(quantity, {gt: 1, lt: 200});
       next();
    } catch (e) {
      res.status(400).json({ error : 'Datos inválidos.'});
    }

}

module.exports = {ordersValidation};
