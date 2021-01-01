const Product = require ("../models/products");
const mongoose = require ('mongoose');
const { request } = require("express");

const controller = {
// Obtener todos los productos GET --- FUNCIONA
 getProducts: (req, res) => {
    Product.find()
    .select('name price _id')
    .exec()
    .then(result => {
      const response = {
        count: result.length, // Cuento la cantidad de productos totales
        products: result.map(result => {
          return{
            name: result.name,
            price: result.price,
            _id: result._id,
            request: {
             type: 'GET'
            }
          }
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    })
  }, // fin de GET

// Obtener producto por id mediante GET 
  findByIdProducts: (req, res) => {
    const id = req.params.productoId;
    Product.findById(id)
    .select('name price _id')
    .exec()
    .then(result =>{
      if (result){
        res.status(200).json({
          product: result,
          request: {
            type: 'GET'
          }
        });
      } else {
        res.status(404).json({message: 'El ID no se encontró o es inválido.'});
      }
   })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    });
  }, // fin de GET por ID

// Crear nuevo producto por POST 
  newProduct: (req, res) => {
    const product = new Product({
       _id : new mongoose.Types.ObjectId(),
       name : req.body.name,
       price : req.body.price
     });
     product
     .save()
     .then(result => {
       res.status(201).json({
         message: 'Producto creado correctamente.',
         createdProduct: {
           name: result.name,
           price: result.price,
           _id: result.id,
           request: {
             type: 'GET'
           }
         }
       });
     })
     .catch(err => {
       console.log(err);
       res.status(500).json({
         error: err
       });
     });
    }, // fin de POST

// Actualizar producto por PATCH 
  updateProduct: (req, res) => {
    const id = req.params.productoId;
    const updateOperations = {};
    for (const ops of req.body){
     updateOperations[ops.propName] = ops.value;
    }
    Product.update({_id: id}, { $set: updateOperations })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'Producto actualizado correctamente.',
        request: {
          type: 'GET'
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    })
    }, // fin de PATCH

    

// Eliminar producto por DELETE 
   deleteProduct: (req, res) => {
    Product.remove({_id : req.params.productoId})
    .exec()
    .then(result =>{
      if (!result){
        return res.status(404).json({
          message: 'No se encontró el producto.'
        });
      }
      res.status(201).json({
          message: 'Producto eliminado correctamente',
          request: {
              type: 'POST'
          }
      });
     })
    .catch(err => {
      res.status(500).json({
          error: err
      })
    });
} // Fin de DELETE

}

module.exports = controller;