let events = []

axios.get('./public/products/meditationProducts.JSON')
.then(res => console.log(res.data))
.then(data => events = data)
.then(() => {
  events.forEach((event) => {
    let img = document.getElementById('heroImg')
    let ul = document.getElementById('list');
    let body = document.getElementById("body")
    let li = document.createElement("li");

    li.setAttribute("eventId", "productName");
    div = document.createElement('div')
    div.setAttribute("eventId", "productDesc");
    div2 = document.createElement('div')
    div2.setAttribute("eventId", "level");
    div3 = document.createElement('div')
    div3.setAttribute("eventId", "dates");
    div4 = document.createElement('div')
    div4.setAttribute("eventId", "location", "locDesc", "state", "country");
    div5 = document.createElement('div')
    div5.setAttribute("eventId", "price");
    div6 = document.createElement('div')
    div6.setAttribute("eventId", "imgSrc");
    
    div6.innerHTML = `<img src="${event.imgSrc}"/>`
    li.innerHTML = `${event.productName}`
    div.innerHTML = `${event.productDesc}`
    div2.innerHTML = `Level: ${event.level}`
    div3.innerHTML = `Dates: ${event.dates}`
    div4.innerHTML = `${event.locDesc}`,`${event.state}`,`${event.country}`
    div5.innerHTML = `Price: ${event.price}`
    
    ul.appendChild(li);
    li.appendChild(div);
    div.appendChild(div2)
    div.appendChild(div3)
    div.appendChild(div4)
    div.appendChild(div5)
   
  })
})