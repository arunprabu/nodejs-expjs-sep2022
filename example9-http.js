const http = require('http');

http.createServer( (req, res) => {
  console.log('Req Received');

  console.log(req); // http req object

  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  switch(req.url){
    case '/':
      res.end(`<html>
        <head><title>Home Page</title></head>
        <body>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
          <h1>Home Page</h1>
        </body>
      </html>`);
      break;
    
    case '/about':
      res.end(`<html>
        <head><title>About Page</title></head>
        <body>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
          <h1>About Page</h1>
        </body>
      </html>`);

      break;

    case '/contact':
      res.end(`<html>
        <head><title>Contact Page</title></head>
        <body>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
          <h1>Contact Page</h1>
        </body>
      </html>`);
      break;

    default: 
      res.statusCode = 404;
      res.end(`<html>
        <head><title>404 Page Not Found</title></head>
        <body>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
          <h1>404 Page Not Found!</h1>
        </body>
      </html>`);
  }

}).listen(3000, () => {
  console.log('Server is started on PORT: 3000. Open the URL http://localhost:3000');
});

