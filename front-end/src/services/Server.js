const axios = require('axios').default;

async function getData(){
    const response = await axios.get('http://open-api.myhelsinki.fi/v1/places/?tags_filter=Restaurant')
    console.log(response)
}


getData()
