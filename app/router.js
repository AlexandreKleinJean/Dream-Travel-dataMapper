const { Router } = require('express');
const mainController = require('./controllers/mainController')
const router = Router();

router.get("/", mainController.accueil)

router.post("/login", mainController.envoyer)

router.get("/client",mainController.client)

router.get("/flightsDestinations", mainController.destinationsList)
router.get("/destination/:id", mainController.clickedDestination)

router.post("/destinations", mainController.budgetDestinationList)

router.get("/hotels", mainController.hotelsList)

module.exports = router;