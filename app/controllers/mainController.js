const dataMapper=require('../../data/dataMapper');

const mainController = {

    async accueil(req, res) {
      res.locals.pageId = "/"
        res.render("home")
    },

    envoyer(req, res) {
        if(req.body.user==="wookie"){
        res.render("updateBdd")
        }
        else{
        res.render("home")
        }
    },

    client(req, res) {
        res.render("client")
    },

    async flights(req, res) {
      try {
        const allFlights = await dataMapper.showFlights();
        res.render('flights', {results:allFlights});
      } catch (error) {
        console.error(error);
        res.status(500).send(`An error occured with the database :\n${error.message}`);
      }
},

    async destinationsList(req, res) {
            try {
              const allFlights = await dataMapper.showFlights();
              res.render('destinations', {results:allFlights});
            } catch (error) {
              console.error(error);
              res.status(500).send(`An error occured with the database :\n${error.message}`);
            }
    },

    async budgetDestinationsList(req, res) {
      const userCriterias = req.body
      console.log(userCriterias)
      try {
        const searchResults = await dataMapper.budgetDestination(userCriterias);
        console.log(searchResults)
        res.render('flights', {results:searchResults});
      } catch (error) {
        console.error(error);
        res.status(500).send(`An error occured with the database :\n${error.message}`);
      }
    },

    async clickedDestination(req, res) {
      const chosenDestination = req.params.id
      try {
        const oneFlight = await dataMapper.showDestination(chosenDestination);
        console.log(oneFlight)
        res.render('destination', {oneFlight});
      } catch (error) {
        console.error(error);
        res.status(500).send(`An error occured with the database :\n${error.message}`);
      }
    },

    async flightsDestinationsList(req, res) {
      try {
        const allDestinations = await dataMapper.showDestinations();
        console.log(allDestinations)
        res.render('destinations', {results:allDestinations});
      } catch (error) {
        console.error(error);
        res.status(500).send(`An error occured with the database :\n${error.message}`);
      }
    },

    async flightsCompaniesList(req, res) {
      try {
        const allFlights = await dataMapper.showCompanies();
        res.render('flightsCompanies', {results:allFlights});
      } catch (error) {
        console.error(error);
        res.status(500).send(`An error occured with the database :\n${error.message}`);
      }
    },

    async hotelsList(req, res) {
      try {
        const allHotels = await dataMapper.showHotels();
        res.render('hotels', {allHotels});
      } catch (error) {
        console.error(error);
        res.status(500).send(`An error occured with the database :\n${error.message}`);
      }
    },

    contact(req, res) {
        res.render('contact');
    }

}

module.exports = mainController;