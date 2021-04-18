const express = require('express');
const chalk = require('chalk');
const cors = require('cors');
const morgan = require('morgan');
const { connect } = require('mongoose');
require('./src/models/itemModel');
const itemListRouter = require('./src/routes/itemListRouter');
require('./src/models/cartModel');
const shoppingCartRouter = require('./src/routes/shoppingCartRouter');
require('dotenv').config();

const server = express();
const port = process.env.PORT || 2130;
const dbUrl = process.env.DBURL;

connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

server.use(morgan('dev'));

server.use(cors());

server.use(express.json());

server.use('/shoppingcart', shoppingCartRouter);
server.use('/', itemListRouter);

server.listen(port, () => {
  console.log(`Server listening on port ${chalk.blueBright(port)}...`);
});
