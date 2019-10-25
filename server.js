const Location = require('./utils/Location')
const Weather = require('./utils/Weather')

location = 'Ottawa'
findTemperature(location)

function findTemperature(data) {
    Location(data, (err, LocationRes) => {
        if (err) {
            console.log(err)
        } else {
            Weather(LocationRes.lat, LocationRes.lgn, (err, WeatherRes) => {
                if(err) {
                    console.log(err)
                } else {
                    console.log(`The Temperature in ${LocationRes.loc} is ${WeatherRes}`)
                }
            })
        }
    })
}

