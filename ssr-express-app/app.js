const express = require('express'); //importing express

const app = express(); // Creates an Express application. 
const port = 3000;

// handling localhost:3000 -- GET method
app.get('/', (req, res) => {
  res.send(`<html>
    <head>
      <title>Home Page</title>
    </head>
    <body>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
      <h1>Home Page</h1>
    </body>
  </html>`);
});

app.get('/about', (req, res) => {
  res.send(`<html>
    <head>
      <title>About Page</title>
    </head>
    <body>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
      <h1>About Page</h1>
    </body>
  </html>`);
});

app.get('/contact', (req, res) => {
  res.send(`<html>
    <head>
      <title>Contact Page</title>
    </head>
    <body>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
      <h1>Contact Page</h1>
    </body>
  </html>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})