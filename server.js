const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page'
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/Projects', (req, res) => {
  res.send('Projects');
})

app.get('/Contact', (req, res) => {
  res.send('Contact Me');
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
