const axios = require('axios').default;

export async function getData(){
    const response = await axios.get('http://open-api.myhelsinki.fi/v1/places/?tags_filter=Restaurant')
    return response.data.data.map(z => z.location))
}

export default location services
