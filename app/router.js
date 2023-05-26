const { Router } = require('express');
const mainController = require('./controllers/mainController')
const router = Router();

router.get("/", mainController.accueil)

router.post("/login", mainController.envoyer)

router.get("/client",mainController.client)

router.get("/flightsDestinations", mainController.destinationsList)

module.exports = router;