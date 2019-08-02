
const { ProductosController } = require('../controllers/productos.controller');
module.exports = (app) => {
  app.get('/getProducto/:sku' , ProductosController.getProductos);
};
