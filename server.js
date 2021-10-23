const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index.ejs');
})

app.get('/api', (req, res) => {
  if (req.query.pal) {
    let string = req.query.pal.toLowerCase();
    string = string.split('').filter(params => params !== ' ').join('');
    let reverse = string.split('').filter(params => params !== ' ').reverse().join('');
    console.log(string, reverse);
    if (string === reverse) {
      var maybe = "yes";
    } else {
      var maybe = "no";
    }
    const obj = {
      answer: maybe
    }
    res.send(obj);
  } else {
    res.send({ err: "Please Enter A Word" });
  }

});

app.listen(8000, console.log('Running'));