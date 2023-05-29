const client = require('./database');

const dataMapper = {

    async showFlights() {

        const query = "SELECT * FROM flights";
        const result = await client.query(query);
        return result.rows;
    },

    async showDestination(chosenDestination) {

        const query = `SELECT * FROM flights WHERE flights.id=${chosenDestination}`;
        const result = await client.query(query);
        return result.rows[0];
    },

    async budgetDestination(criterias) {
        const query = `SELECT * FROM flights WHERE flights.destination='${criterias.destination}' AND flights.price<=${criterias.budget}`;
        const result = await client.query(query);
        return result.rows;
    },

    async showHotels(){

        const query = "SELECT * FROM hotels";
        const result = await client.query(query);
        return result.rows;
    },

}

module.exports = dataMapper;