require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const csurf = require('csurf');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3000;
const csrfProtection = csurf({ cookie: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(csrfProtection);
app.use('/public', express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE
});


connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});

app.get('/', (req, res) => {
    res.render('index', { csrfToken: req.csrfToken() });
  });

//secure route that uses parameterized queries:
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
    connection.query(sql, [username, password], (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        res.send(`<h1>Logged in successfully</h1>`);
      } else {
        res.send(`<h1 style="color: red;">Login failed</h1>`);
      }
    });
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});