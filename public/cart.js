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
        const titleContainer=document.getElementById("title")
        const priceContainer=document.getElementById("price")
        const removeContainer=document.getElementById("remove")
        let title = document.createElement("p")
        title.innerHTML= data.item
        titleContainer.appendChild(title)
        let price = document.createElement("p")
        price.innerHTML= data.amount
        priceContainer.appendChild(price)
  
    let removeFromCart = document.createElement('button')
    removeFromCart.setAttribute("class", "btn btn-info")
    removeFromCart.setAttribute("type", "button")
    removeFromCart.setAttribute("id", "btn-remove-cart") 
    removeFromCart.onclick = function(){
    axios.post('http://localhost:3000/removefromcart', {id:data.id, amount:data.amount})
    }
    removeFromCart.innerText = "Remove"
    removeContainer.append(removeFromCart)
      })
    }
  })
