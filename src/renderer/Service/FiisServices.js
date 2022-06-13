/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-async-promise-executor */
const axios = require('axios');

class FiisServices {

    getFiis = () => {
        console.log('getFiis ============================');
        return new Promise(async (resolve, reject) => {
          try {
            axios({
              method:"GET",
              url: "https://electron-invest.herokuapp.com/v1/getFiis"
           })
           .then(res => resolve(res.data))
           .catch(err => reject(err))
          } catch (error) {
            reject(error);
          }
        });
    };
    
    analize (id, type) {
        return new Promise((resolve, reject) => {
            try {
                const options = {
                    method: 'post',
                    url: "https://electron-invest.herokuapp.com/v1/analize",
                    headers: { 
                        'Content-Type': 'application/json'
                    },
                    data:JSON.stringify({
                        "roof": 9,
                        "items": [
                          {
                            "id": id.replace(/[0-9]/g, ''),
                            type,
                            "time": 3
                          }
                        ]
                      })
                }
                axios(options)
                    .then(res => resolve(res.data))
                    .catch(err => {
                        reject(err)
                    })
            } catch (err) {
                reject(err)
            }
        })
    }
}

module.exports = new FiisServices()
