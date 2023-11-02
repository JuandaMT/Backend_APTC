const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
const { authentication } = require("../middleware/authentication");

router.post("/",authentication, ProductController.create);
router.get("/", ProductController.getAll);
router.get("/id/:_id", ProductController.getById);
router.get('/name/:name',ProductController.getProductsByName);
router.put('/id/:_id',authentication, ProductController.update);
router.delete('/id/:_id',authentication, ProductController.delete);

module.exports = router;
