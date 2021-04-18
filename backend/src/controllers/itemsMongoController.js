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

  async function getByIdMethod(req, res) {
    try {
      const { itemId } = req.params;
      const query = { id: itemId };

      const items = await itemModel.findOne(query);

      res.send(items);
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getMethod, postMethod, deleteMethod, getByIdMethod,
  };
}

module.exports = itemsMongoController;
