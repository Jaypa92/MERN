const Product = require('../controllers/project_manager.controller')

module.exports = function(app){
    app.post('/api/products',Product.createProduct)
    app.get('/api/products',Product.getAllProducts)
    app.get('/api/products/:id',Product.getOne)
    app.put('/api/products/:id',Product.updateProduct)
    app.delete('/api/products/:id',Product.deleteProduct)
}