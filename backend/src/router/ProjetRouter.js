const express = require("express");

const { ProjetController } = require("../controllers");

const router = express.Router();

router.get("/projet", ProjetController.browse);
router.put("/projet", ProjetController.edit);

module.exports = router;
