const express = require('express');
const itemsMongoController = require('../controllers/itemsMongoController');

function itemsRouter() {
  const router = express.Router();
  const itemsMongo = itemsMongoController();

  router.route('/')
    .get(itemsMongo.getMethod)
    .post(itemsMongo.postMethod)
    .delete(itemsMongo.deleteMethod);

  router.route('/:itemId')
    .get(itemsMongo.getByIdMethod);

  return router;
}

module.exports = itemsRouter();
