for(
  axios.get("http://localhost:3000/addtocart"
  || "http://localhost:3000/removefromcart")
  .then(res => {
    let data = res.data
    
    //create multi product container
    let container = document.getElementById('productContainer')
    let productContainer = document.createElement('div')

    //create container for product
    productContainer.setAttribute("id", "productDescription")
    container.appendChild(productContainer)

    //add title
    let title = document.createElement('h1')
    title.innerHTML = value.productName
    productContainer.append(title)

    //price
    let productPrice = document.createElement('p')
    productPrice.innerHTML = value.cartPrice
    descriptionContainer.append(productPrice)

    //remove from cart
    let removeFromCart = document.createElement('button')
    removeFromCart.setAttribute("class", "btn btn-info")
    removeFromCart.setAttribute("type", "button")
    removeFromCart.setAttribute("id", "btn-remove-cart")
    removeFromCart.setAttribute("href", "http://localhost:3000/removefromcart")
    removeFromCart.onclick = function(){
      axios.post('http://localhost:3000/removefromcart', {item:value.productName, amount:value.cartPrice})
    }
    removeFromCart.innerText = "Cancel"

    productContainer.append(removeFromCart)
  }
    
  )


.catch(err => console.log(err))
)