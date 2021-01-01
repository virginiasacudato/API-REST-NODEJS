// Validación de datos de entrada del Login y Signup

const validator = require('validator');


const loginValidation = (req, res, next) => {

    const {email, password} = req.body;

    try {
       const validateEmail = !validator.isEmpty(email) && validator.isEmail(email);
       const validatePassword = !validator.isEmpty(password);
       next();
    } catch (e) {
      res.status(400).json({ error : 'Datos inválidos.'});
    }

}

module.exports = {loginValidation};