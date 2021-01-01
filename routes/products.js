const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');
const {productsValidation} = require('../middlewares/products-validate');

router.get('/', productController.getProducts);
router.get('/:productoId', productController.findByIdProducts);
router.post('/', productsValidation, productController.newProduct);
router.patch('/:productoId', productsValidation, productController.updateProduct);
router.delete('/:productoId', productController.deleteProduct);

module.exports = router;
