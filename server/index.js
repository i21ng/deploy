const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();
app.use(bodyParser.json());

require('./models/animales');
mongoose.connect(keys.MONGO_URL, { useNewUrlParser: true });

require('./routes/animalesRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    });
}

app.listen(process.env.PORT || 5000);
