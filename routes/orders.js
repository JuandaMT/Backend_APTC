const express = require("express");
const router = express.Router();
const { authentication, isAuthor } = require("../middleware/authentication");
const OrderController = require("../controllers/OrderController");

router.post("/", authentication,OrderController.create);
router.put("/id/:_id", authentication, isAuthor, OrderController.update);

module.exports = router;