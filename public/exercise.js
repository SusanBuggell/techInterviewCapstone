axios.get('./public/products/exerciseProducts.JSON')
.then(res => console.log(res.data))
.catch(err => console.log(err))