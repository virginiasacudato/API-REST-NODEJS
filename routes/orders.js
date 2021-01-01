const express = require('express');
const router = express.Router();
const orderController = require ('../controllers/orders');
const {orderValidation} = require ('../middlewares/orders-validate');

router.get('/', orderController.getOrder);
router.post('/', orderValidation, orderController.updateOrder);
router.get ('/:ordenId', orderController.getOrderById);
router.delete ('/:ordenId', orderController.deleteOrder);

module.exports = router;