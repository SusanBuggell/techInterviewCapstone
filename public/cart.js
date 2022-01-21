axios.get("http://localhost:3000/getcart")
  .then(res => {
    const response = res.data
    const total = res.data.total

    if(response === 'Your cart is currently empty'){
      const response = res.data
      console.log(response)
      const container=document.getElementById("noitems")
      let noitems = document.createElement("p")
      noitems.innerHTML= response
      container.appendChild(noitems)
    } else {
      const data = res.data.cartItems
      data.map(data => {
        const titleContainer=document.getElementById("title")
        const priceContainer=document.getElementById("price")

        let title = document.createElement("p")
        title.innerHTML= data.item
        titleContainer.appendChild(title)
        let price = document.createElement("p")
        price.innerHTML= `$${data.amount}`
        priceContainer.appendChild(price)
      })
      const container=document.getElementById("total")
      let total = document.createElement("p")
      total.innerHTML= `$${res.data.total}`
      container.appendChild(total)
      const checkoutContainer=document.getElementById("checkout")
          let checkout = document.createElement('button')
          checkout.setAttribute("class", "btn btn-primary")
          checkout.setAttribute("type", "button" )
          checkout.setAttribute("data-toggle", "modal")
          checkout.setAttribute("data-target", "#exampleModal")
          // checkout.onclick = function(){
          checkout.innerText = "Checkout"
          checkoutContainer.append(checkout)
          checkout.onclick = function(){
            axios.get("http://localhost:3000/getcart")
            .then(res=>{

              console.log("modal", res.data)
            })
            }
            let modalBody = document.createElement('p')
            res.data.cartItems.map(data => {
              const modalContainer=document.getElementById("modal-body")
      
              let title = document.createElement("p")
              title.innerHTML= data.item
              modalContainer.appendChild(title)
            })
    }
  })
function test (){
  axios.get("http://localhost:3000/checkout")
  document.getElementById("modal-body").style.display = "none"
  document.getElementById("confirmation-body").style.display = "block"
}