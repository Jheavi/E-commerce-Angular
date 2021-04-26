const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const itemSchema = new Schema({
  'actual-price': String || null,
  brand: String,
  colors: [String] || null,
  fixings: [{
    number: Number,
    available: Boolean,
  }] || null,
  'fixed-name': String || undefined,
  gender: String,
  images: [String],
  name: String,
  'original-price': String,
  sizes: [{
    size: String,
    available: Boolean,
  }] || null,
  type: String,
});

module.exports = model('Item', itemSchema);
