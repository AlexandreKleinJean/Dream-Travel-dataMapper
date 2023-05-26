const client = require('./database');

const dataMapper = {

    async showFlights() {

        const query = "SELECT * FROM flights";
        const result = await client.query(query);
        return result.rows;
    },

}

module.exports = dataMapper;