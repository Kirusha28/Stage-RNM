const { Schema, model, version } = require('mongoose');

const schema = Schema({
    sku: String,
    image: String,
    name: String,
    category: String,
    proveedor: String,
    unit: String,
    cqty: String,
    oqty: String,
    iva: String,
    entryPrice: String,
    cp: String,
    profit: String,
    margen: String,
    total: String
}, {versionKey: false})

const Products = model("Products", schema);

module.exports = Products;