const request = require('request')

const Weather = async (lat, lgn, callback) => {

    const url = `https://api.darksky.net/forecast/cb0cbdae58a2e9865502cefab9341b92/${lat},${lgn}`

    await request({ url: url, json: true }, (err, res) => {
        if(err) {
            callback('There was an error in your search', undefined)  
        } else if(res.body.error) {
            callback(res.body.error, undefined)
        } else {
           callback(undefined, res.body.currently.temperature)
        }
    })
}


module.exports = Weather