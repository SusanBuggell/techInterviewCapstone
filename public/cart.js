axios.get("http://localhost:3000/getcart")
  .then(res => {
    const response = res.data
    if(response === 'No items in cart'){
      const response = res.data
      console.log(response)
      const container=document.getElementById("noitems")
      let noitems = document.createElement("p")
      noitems.innerHTML= response
      container.appendChild(noitems)
    } else {
      const data = res.data.cartItems
      res.data.cartItems.map(data => {
        console.log(data.item)
        console.log(data.amount)
        const titleContainer=document.getElementById("title")
        const priceContainer=document.getElementById("price")
        let title = document.createElement("p")
        title.innerHTML= data.item
        titleContainer.appendChild(title)
        let price = document.createElement("p")
        price.innerHTML= data.amount
        priceContainer.appendChild(price)

      })
    }
  })
