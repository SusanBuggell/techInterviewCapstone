axios.get('./public/products/meditationProducts.JSON')
.then(res => {
  let data = res.data
  for (const [key, value] of Object.entries(data)) {

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

    //fill container with image
    let Image = document.createElement('img')
    Image.setAttribute("id", "productImage")
    Image.setAttribute("src", value.imgSrc)
    productContainer.append(Image)

    //add product description
    let descriptionContainer = document.createElement('div')
    descriptionContainer.setAttribute("id", "productDescriptionContainer")
    productContainer.append(descriptionContainer)

    //descrip
    let verbiage = document.createElement('p')
    verbiage.innerHTML = value.productDesc
    descriptionContainer.append(verbiage)

    //price
    let productPrice = document.createElement('p')
    productPrice.innerHTML = value.price
    descriptionContainer.append(productPrice)

    //add to cart
    let addToCart = document.createElement('button')
    addToCart.setAttribute("class", "btn btn-info")
    addToCart.setAttribute("type", "button")
    addToCart.setAttribute("id", "btn-add-cart")
    addToCart.setAttribute("href", "http://localhost:3000/cart")  
    addToCart.onclick = function(){
    axios.post('http://localhost:3000/addtocart', {item:value.productName, amount:value.cartPrice})
    }
    addToCart.innerText = "Purchase"
    productContainer.append(addToCart)
  }
})
.catch(err => console.log(err))