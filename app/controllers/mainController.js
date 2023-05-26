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
      res.locals.pageId = "flights"
            try {
              const allFlights = await dataMapper.showFlights();
              res.render('destinations', {allFlights});
            } catch (error) {
              console.error(error);
              res.status(500).send(`An error occured with the database :\n${error.message}`);
            }
    },

    async destinations(req, res) {
      res.locals.pageId = "flights"
      try {
        const allFlights = await dataMapper.showFlights();

        console.log(allFlights)
        res.render('flightsDestination', {allFlights});
      } catch (error) {
        console.error(error);
        res.status(500).send(`An error occured with the database :\n${error.message}`);
      }
},
}

module.exports = mainController;