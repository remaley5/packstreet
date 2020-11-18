
const cors = require('cors');
const createError = require('http-errors');
const cookieParser = require('cookie-parser')
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');

const app = express();

const routes = require('./routes');

// app.listen(3000, function () {
//   console.log("Express server listening on port 3000");
//   });


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser())

// Security Middleware
app.use(cors({ origin: true }));
app.use(helmet({ hsts: false }));

//this will create a _csrf cookie on browser after a fetch call. This cookie is then compared to the cookie provided by req.csrfToken() function

app.use('/', routes);

// Serve React Application
// This should come after routes, but before 404 and error handling.
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get(/\/(?!api)*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.use(function(_req, _res, next) {
  next(createError(404));
});

app.use(function(err, _req, res, _next) {
  res.status(err.status || 500);
  if (err.status === 401) {
    res.clearCookie('token');
  }
  res.json({
    message: err.message,
    stack: err.stack,
    errors: err.errors,
  });
});

module.exports = app;
