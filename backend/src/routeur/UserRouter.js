const express = require("express");

const { UserController } = require("../controllers");

const router = express.Router();

router.post("/users/register", UserController.register);
router.post("/users/login", UserController.login);
router.get("/users", UserController.browse);
router.get("/users/logout", UserController.logout);

router.put("/users", UserController.edit);

module.exports = router;
