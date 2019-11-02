const axios = require('axios').default;

export function getData(){
    return axios.get('http://open-api.myhelsinki.fi/v1/places/?tags_filter=Restaurant')
}