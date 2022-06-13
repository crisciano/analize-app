/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-async-promise-executor */
const axios = require('axios');

class StocksServices {

    getStocks (ids, headers) {
        return new Promise((resolve, reject) => {
            try {
                axios({
                    method:"GET",
                    url: "https://electron-invest.herokuapp.com/v1/magicFormula/acoes"
                })
                .then(res => resolve(res.data))
                .catch(err => reject(err))
            } catch (err) {
                 logger.error(genericError('', err))
                 reject(err)
            }
        })
    }
}

module.exports = new StocksServices()
