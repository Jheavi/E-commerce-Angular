const express = require('express');
const shoppingCartController = require('../controllers/shoppingCartController');

function cartRoutes() {
  const router = express.Router();
  const shoppingCart = shoppingCartController();

  router.route('/')
    .get(shoppingCart.getMethod)
    .patch(shoppingCart.patchMethod)
    .delete(shoppingCart.deleteMethod);

  return router;
}

module.exports = cartRoutes();
