const { Router } = require('express');
const mainController = require('./controllers/mainController')
const router = Router();

router.get("/", mainController.accueil)

router.post("/login", mainController.envoyer)

router.get("/client",mainController.client)

router.get("/flightsDestinations", mainController.flightsDestinationsList)
router.get("/destination/:id", mainController.clickedDestination)

router.get("/flights", mainController.flights)
router.post("/destinations", mainController.budgetDestinationsList)

router.get("/flightCompanies", mainController.flightsCompaniesList)

router.get("/hotels", mainController.hotelsList)

router.get("/contact", mainController.contact)

module.exports = router;