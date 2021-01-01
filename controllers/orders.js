const mongoose = require ('mongoose');
const { request } = require("express");
const Order = require ('../models/orders');
const Product = require ('../models/products');

const controller = {
    // Obtener ordenes por GET
    getOrder: (req, res) => {
       Order.find()
       .select('product quantity _id')
       .exec()
       .then( result =>{
         res.status(200).json({
             count: result.length,
             orders: result.map(result =>{
              return {
                  _id: result._id,
                  product: result.product,
                  quantity: result.quantity,
                  message: 'Orden obtenida',
                  request: {
                   type: 'GET'
                  }
                }
             })
         })
       })
       .catch(err => {
           res.status(500).json({
               error: err
           });
        });

      },
    // Obtener orden especifica por ID mediante GET
    getOrderById: (req, res) =>{
        Order.findById(req.params.ordenId)
        .exec()
        .then(result =>{
            if (!result){
                return res.status(404).json({ message: 'El producto no existe o fue eliminado.' });
            }
            res.status(200).json({
                order: result,
                message: 'Orden obtenida por id correctamente',
                request: {
                    type: 'GET'
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
    },

    // Crear una nueva orden por POST 
    updateOrder: (req, res) => {
        Product.findById(req.body.productId)
        .then(result =>{
            if (!result){
                 return res.status(404).json({
                   message: 'Producto no encontrado'
                });
            }
            const order = new Order ({
                _id: mongoose.Types.ObjectId(),
                quantity: req.body.quantity,
                product: req.body.productId
             });
             return order.save();
            })
             .then(result =>{
                 console.log(result);
                 res.status(201).json({
                     message: 'Orden realizada satisfactoriamente',
                     createdOrder: {
                       _id: result._id,
                       product: result.product,
                       quantity: result.quantity
                     },
                     request: {
                         type: 'GET'
                     }
                 });
        })
        .catch(err => {
          res.status(500).json({
              error: err
          })
        });
    },

    // Eliminar orden por DELETE 
    deleteOrder: (req, res) =>{
       Order.remove({ _id : req.params.ordenId})
       .exec()
       .then(result =>{
        console.log(result);
        res.status(201).json({
            message: 'Orden eliminada correctamente',
            request: {
                type: 'POST',
                body: { productId: "ID", quantity: "Number"}
            }
        });
       })
       .catch(err => {
        res.status(500).json({
            error: err
        })
      });
       }
    
}
module.exports = controller;