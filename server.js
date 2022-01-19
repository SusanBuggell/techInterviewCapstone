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

app.get('/api/meditation', (req, res) => {
    res.sendFile(__dirname + '/meditation.html')
  console.log('Meditation page hit successfully.')
});

app.get('/api/yoga', (req, res) => {
    res.sendFile(__dirname + '/yoga.html')
  console.log('Yoga page hit successfully.')
});

app.get('/api/movement-exercise', (req, res) => {
    res.sendFile(__dirname + '/moveExercise.html')
  console.log('Movement and exercise page hit successfully.')
});

app.post("/api/addEventToCart/:id", (req, res) => {
  console.log(req.body);
  const { eventId } = req.body;
  console.log(`Event ID app.post: ${eventId}`);
  }
)

 app.delete("/api/deleteEventFromCart/:id", (req,res)=>{
   console.log(req.body)
   const { eventId } = req.body;
   console.log(`Event ID app.delete: ${eventId}`) 
   }
 )

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
