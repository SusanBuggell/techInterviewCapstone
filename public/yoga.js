console.log("yoga.js")

axios.get('./public/products/yogaProducts.JSON')
.then(res => console.log(res.data))
.catch(err => console.log(err))