const { render } = require('ejs');
const express = require('express');
const path = require('path');

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));
    

// Serve static files from the "src" directory
app.use('/src', express.static(path.join(__dirname, 'src')));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.post('/download', (req, res) => {
  res.download('./views/cv.pdf');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
