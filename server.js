const express = require("express");
const cors = require('cors')
// const sgMail = require('@sendgrid/mail')
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
//default folder for searching for files
// app.use(express.static('public'));

//default folder for searching for files
// app.use(express.static('client'));
// app.use(express.static(path.join(__dirname, 'client/index.html')))

let total = 0
let cartItems = []
let users=[]
let returnedTotal = toString(total)

//send back root domain .html file

// app.all('/', (req, res) =>{
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next()
// });

app.get('/', (req,res) =>{
  res.sendFile(__dirname + '/index.html');
  console.log('Index page hit successfully.')
});
app.get('/confirmation', (req,res) =>{
  res.sendFile(__dirname + '/confirmation.html');
  console.log('Confirmation page hit successfully.')
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

 app.get("/getcart", (req, res)=>{
   res.send(
     cartItems.length > 0 ? {cartItems,total} : "Your cart is currently empty"
   )
   console.log(`getcart total: ${total}`)
 })
 
 app.get('/createAccountForm', (req,res) =>{
  res.sendFile(__dirname + '/createAccount.html');
  console.log('CreateAccount page hit successfully.')
});

app.post("/createaccount", (req, res) => {
  res.send('Create account user add hit successfully.')
  const firstName = req.body.firstName
  const lastName= req.body.lastName
  const email=req.body.email
  const streetAddress = req.body.streetAddress
  const city = req.body.city
  const stateProvince = req.body.stateProvince
  const country = req.body.country
  const zipPostalCode = req.body.zipPostalCode
  const DOB = req.body.DOB
  const gender = req.body.gender
  users.push({firstName,lastName,email,streetAddress,city,stateProvince,country,zipPostalCode,DOB,gender})
  console.log("users: ",users)
   }
 )

// app.get("/checkout", (req, res) =>{
    
//   const sgMail = require('@sendgrid/mail')
//     sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//     const msg = {
//       to: 'susan.buggell@gmail.com', // Change to your recipient
//       from: 'sbuggell@gmail.com', // Change to your verified sender
//       subject: 'Self-Care Sanctuary Order Confirmation',
//       text: 'Thank you for your Order',
//       html: 'localhost:3000',
//     }
//     sgMail
//       .send(msg)
//       .then(() => {
//         console.log('Email sent')
//       })
//       .catch((error) => {
//          console.error(error)
//       })
//   // res.send("checkout complete")
//  })

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
