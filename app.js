const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const events = require('./routes/api/events');
const passport = require('passport');
require('./config/passport')(passport);

const app = express();
const db = require('./config/keys').mongoURI;
mongoose.connect(db)
        .then(() => console.log('Connected to MongoDB successfully'))
        .catch(err => console.log(err));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.get('/', (req, res) => res.send('Hello, world!'));
app.use('/api/users', users);
app.use('/api/events', events);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
