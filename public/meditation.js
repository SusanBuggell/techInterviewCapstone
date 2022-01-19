// import axios from "axios"

// const btnAddMedEvent1 = document.getElementById('add-cart-med-event1')
// const btnAddMedEvent2 = document.getElementById('add-cart-med-event2')
// const meditationProducts = axios.get('meditationProducts.value')

console.log('meditationProducts.data')

axios.get('./public/products/meditateProducts.JSON')
.then(res => console.log(res.data))
.catch(err => console.log(err))

// handlerAddEventToCard()
// btnAddMedEvent1.addEventListener('click',<insert function></insert>)
// btnAddMedEvent2.addEventListener
