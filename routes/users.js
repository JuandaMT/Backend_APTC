const express = require("express");
const router = express.Router();
const { authentication } = require("../middleware/authentication");
const UserController = require("../controllers/UserController");

router.post("/", UserController.register);
router.post("/login", UserController.login);
router.delete('/logout',authentication, UserController.logout);
router.get('/info',authentication, UserController.getInfo);

module.exports = router;
