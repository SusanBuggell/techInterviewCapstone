axios = require('axios')
axios.get('./public/countries.txt')
.then(res => {
  let data = res.data
  for (const [key, value] of Object.entries(data)) {
    value.replace(/[0-9]/g, '')
    value.replace(/\n\n/g, '","')
    console.log(`${key}:${value}`)
  }
  
})
