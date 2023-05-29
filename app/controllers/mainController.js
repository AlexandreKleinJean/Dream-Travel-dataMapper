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

    async destinationsList(req, res) {
            try {
              const allFlights = await dataMapper.showFlights();
              res.render('destinations', {results:allFlights});
            } catch (error) {
              console.error(error);
              res.status(500).send(`An error occured with the database :\n${error.message}`);
            }
    },

    async budgetDestinationList(req, res) {
      const criterias = req.body
      console.log(criterias)
      try {
        const searchResultsByCriterias = await dataMapper.budgetDestination(criterias);
        console.log(searchResultsByCriterias)
        res.render('destinations', {results:searchResultsByCriterias});
      } catch (error) {
        console.error(error);
        res.status(500).send(`An error occured with the database :\n${error.message}`);
      }
    },

    async clickedDestination(req, res) {
      const chosenDestination = req.params.id

      try {
        const oneFlight = await dataMapper.showDestination(chosenDestination);
        res.render('destination', {oneFlight});
      } catch (error) {
        console.error(error);
        res.status(500).send(`An error occured with the database :\n${error.message}`);
      }
    },

    async flightsCompaniesList(req, res) {
      try {
        const allFlights = await dataMapper.showFlights();
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

}

module.exports = mainController;