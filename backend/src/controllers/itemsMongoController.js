const itemModel = require('../models/itemModel');

function itemsMongoController() {
  async function getMethod(req, res) {
    try {
      const query = {};

      const items = await itemModel.find(query);

      res.send(items);
    } catch (error) {
      res.send(error);
    }
  }

  async function postMethod(req, res) {
    try {
      const item = req.body;
      const newItem = await itemModel.create(item);

      res.send(newItem);
    } catch (error) {
      res.send(error);
    }
  }

  async function deleteMethod(req, res) {
    try {
      const item = req.body;
      const query = { 'product-type': item['product-type'] };

      await itemModel.deleteMany(query);

      res.send('Deleted');
    } catch (error) {
      res.send(error);
    }
  }

  async function getByNameMethod(req, res) {
    try {
      const { productName } = req.params;
      const { isFixedName } = req.query;
      const query = isFixedName ? { 'fixed-name': productName } : { name: productName };

      const item = await itemModel.findOne(query);

      res.send(item);
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getMethod, postMethod, deleteMethod, getByNameMethod,
  };
}

module.exports = itemsMongoController;
