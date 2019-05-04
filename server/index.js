const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();
app.use(bodyParser.json());

require('./models/animales');
mongoose.connect(keys.MONGO_URL, { useNewUrlParser: true });

require('./routes/animalesRoutes')(app);

app.listen(process.env.PORT || 5000);
