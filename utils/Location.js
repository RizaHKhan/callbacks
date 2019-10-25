const request = require('request')

const Location = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibWFzdGFyYXoiLCJhIjoiY2p6enM3Mmw5MjFkZDNsbWw0ODZ0Z2htaSJ9.u7TYW90kv6jFKHcmrJ5_jw&limit=1`
    
    request({ url: url, json: true }, (err, res) => {
        if(err) {
            callback('Unable to find location services', undefined)
        } else if (res.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                lat: res.body.features[0].center[1],
                lgn: res.body.features[0].center[0],
                loc: res.body.features[0].place_name
            })
        }
    })
}

module.exports = Location