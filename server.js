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

  }
)

app.post("/removefromcart", (req,res)=>{
  res.send('Cart remove hit successfully.')

   }
 )

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
