const express = require("express");

const { ProjetController } = require("../controllers");

const router = express.Router();

router.get("/projets", ProjetController.browse);
router.put("/projets", ProjetController.edit);

module.exports = router;
