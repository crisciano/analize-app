const axios = require('axios')

class AnalizeService {

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
                            "id": sanitizeId(id),
                            type,
                            "time": 5
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

const sanitizeId = (string) => {
    var id = string.replace(/[0-9]/g, '')
    var arr = Array.from(id)
    arr.pop()
    return id.lenght === 5 ? arr.toString().replaceAll(',','') :id
}

module.exports = new AnalizeService()