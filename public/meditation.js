axios.get('./public/products/meditationProducts.JSON')
.then(res => console.log(res.data))
.catch(err => console.log(err))

