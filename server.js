const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use('/public', express.static('public'));
//default folder for searching for files
// app.use(express.static('public'));

//default folder for searching for files
// app.use(express.static('client'));
// app.use(express.static(path.join(__dirname, 'client/index.html')))

let total = 0
let cartItems = []
let returnedTotal = toString(total)

//send back root domain .html file

app.get('/', (req,res) =>{
  // res.sendFile('./index.html');
  // res.sendFile('index.html', { root: __dirname })
  res.sendFile(__dirname + '/index.html');
  console.log('Index page hit successfully.')
});

app.get('/meditation', (req, res) => {
    res.sendFile(__dirname + '/meditation.html')
  console.log('Meditation page hit successfully.')
});

app.get('/yoga', (req, res) => {
    res.sendFile(__dirname + '/yoga.html')
  console.log('Yoga page hit successfully.')
});

app.get('/exercise', (req, res) => {
    res.sendFile(__dirname + '/exercise.html')
  console.log('Movement and exercise page hit successfully.')
});

app.get('/cart', (req, res) => {
  res.sendFile(__dirname + '/cart.html')
console.log('Shopping cart page hit successfully.')
}); 

app.post("/addtocart", (req, res) => {
 res.send('Cart add hit successfully.')
 const amount = req.body.amount
 const item = req.body.item
 const id = cartItems + 1
 total += parseInt(amount)
 cartItems.push({id, item, amount})
 console.log(item + total)

  }
)

app.post("/removefromcart", (req,res)=>{
  res.send('Cart remove hit successfully.')
  const id = req.body.id
  const amount = req.body.amount
  total -= parseInt(amount)
  console.log(total)
  console.log(id, amount)
   }
 )

 app.get("/getcart", (req, res)=>{
   res.send(
     cartItems.length > 0 ? {cartItems} : "No items in cart"
   )
 })

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
