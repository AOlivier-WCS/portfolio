const express = require("express");

const { ProjetController } = require("../controllers");

const router = express.Router();

router.get("/projets", ProjetController.browse);
router.get("/projets/:id", ProjetController.read);
router.put("/projets", ProjetController.edit);
router.post("/projets", ProjetController.add);

module.exports = router;
