const request = require('request')

const geocode = (city, callback) => {
    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

    /*request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })*/

    const access_key = '0b3b99e128fb0540979d1967c55de1e4'
    const units = 'f'   
    const url = 'http://api.weatherstack.com/current?access_key='+access_key+'&query='+city+'&units='+units
    request({ url : url, json : true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.success === false) {
            console.log(body)
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.location.lat,
                longitude: body.location.lon,
                location: body.location.name
            })
        }
    })
}

module.exports = geocode