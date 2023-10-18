const { Router } = require('express');
const Products = require('../models/Products');
const router = Router();


router.get('/GET', async (req, res) => {
  const products = await Products.find({})
  res.send(JSON.stringify(products))
  //console.log(products);
  console.log( "Get all succes");
})

router.delete('/DELETE/:id', async (req, res) => {
  const products = await Products.findByIdAndDelete(
    req.params.id
    );
  console.log(`delete succses`);
})

router.get('/GetOne/:id', async (req, res) => {
  const products = await Products.findById(
    req.params.id
    );
    res.send(JSON.stringify(products))
  console.log(`getOne succses`);
})

router.put('/UPDATE/:id', async (req, res) => {
  const products = await Products.findById(req.params.id)
  const updateProducts = await Products.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.json(updateProducts);
})

router.post('/CREATE/', (req, res) => {
  console.log(req.body);
  const product = new Products({
    sku: req.body.sku,
    image: req.body.image,
    name: req.body.name,
    category: req.body.category,
    proveedor: req.body.proveedor,
    unit: req.body.unit,
    cqty: req.body.cqty,
    oqty: req.body.oqty,
    iva: req.body.iva,
    entryPrice: req.body.entryPrice,
    cp: req.body.cp,
    profit: req.body.profit,
    margen: req.body.margen,
    total: req.body.total
  })
  
  product.save();
  res.json(product);
  //res.redirect('/GET');
})


module.exports = router