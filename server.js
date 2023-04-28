const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');

const corsOptions = {

  origin: "*" // VUE projeckt címe //http://localhost:5173

}
const app = express();

app.use(cors(corsOptions));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.json({
    message: 'ok',
  });
});

app.use(session({
  secret: 'secret', 
  resave: false, 
  saveUninitialized: true, 
  cookie: { 
    maxAge: 1000 * 60 * 60 * 24, 
    sameSite: 'strict' 
  }
}));

// Az EJS sablonmotor beállítása
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// Az Express.js konfigurációja
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Az útválasztók beállítása
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/user');
const orderRouter = require('./routes/order');
app.use('/', authRouter);
app.use('/', usersRouter);
app.use('/', orderRouter);




require('./routes/ford.route')(app);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});

