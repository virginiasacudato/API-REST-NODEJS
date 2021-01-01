const mongoose = require ('mongoose');
const { request } = require ("express");
const User = require ("../models/users");
const fs = require ('fs'); // file system
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcrypt');
const key = fs.readFileSync("./keys/private.pem"); //Leo la clave privada dentro de la carpeta keys

// Tiempo de expiración del token y tipo de encriptación
const options = {expiresIn: '5h', algorithm: "RS256"}; 

// Generar cifrado a partir de payload, key y options
const createToken = payload => jwt.sign(payload, key, options); 


const controller = {
// Registro de usuario
   signup: (req, res) => {
    User.find({email: req.body.email})
    .exec()
    .then( user => {
        // Verifico si el email está registrado
        if (user.length >= 1) {
            return res.status(409).json({  // 409 --> Conflicto || 422 --> Entidad no procesable
              message: 'Email ya registrado.'
            }) 
         } else {
             // Creo el usuario
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                const user = new User ({ 
                _id : new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash
                });
                user.save()
                .then( result => {
                    console.log(result);
                    return res.status(201).json({
                        message: 'Usuario creado.'
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
              }
            });
          }  
        })
   
   
     }, // Fin del registro

 
    login:  async (req, res) => {
      try {
        const params = req.body;
        const {email, password} = User;
        // Verifico que email y password coincidan, y en caso contrario ---> 401 Unauthorized
        const user_ = await User.findOne({ email: params.email });
        if (!user_) return res.status(401).json({error: true, message: 'La contraseña o el correo electrónico son incorrectos.'});

        const validatePassword = await bcrypt.compare(params.password, password);
        if (!validatePassword) return res.status(401).json({error: true, message: 'La contraseña o el correo electrónico son incorrectos.'});
        
        const {_id} = User; // Destructuro id de User de models
        const token = createToken({_id, email }); // Creo el token a partir del id y el email
        res.json ({ JWT : token }); 
    } catch (e) {
        console.log(e);
    }
       
}
}



module.exports = controller;