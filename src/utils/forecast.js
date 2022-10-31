const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //onst url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    debugger
    const url = 'https://api.openweathermap.org/data/2.5/weather?appid=a626006981af10c3b7bea063740dee6f&lat=' + latitude + '&lon=' + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.code >= 400) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.weather[0].main + '. ' + body.weather[0].description + '. It is currently ' + body.main.temp + ' degress out. It feels like ' + body.main.feels_like + ' degress out.')
        }
    })
}

module.exports = forecast